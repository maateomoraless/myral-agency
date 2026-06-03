"use client";

import { useEffect, useRef, useState } from "react";

export function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function useInViewOnce(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, active };
}

export function CounterValue({
  active,
  target,
  duration = 2000,
  format,
  className = "",
  style,
}: {
  active: boolean;
  target: number;
  duration?: number;
  format: (n: number) => string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [display, setDisplay] = useState(() => format(0));
  const formatRef = useRef(format);
  formatRef.current = format;

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    let raf = 0;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setDisplay(formatRef.current(target * easeOutCubic(progress)));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return (
    <div className={className} style={style}>
      {display}
    </div>
  );
}

export type AnimatedStatItem = {
  label: string;
  target?: number;
  staticValue?: string;
  duration?: number;
  format?: (n: number) => string;
  valueClassName?: string;
  valueStyle?: React.CSSProperties;
  cellClassName?: string;
};

export function AnimatedStatStack({
  items,
  className = "",
}: {
  items: AnimatedStatItem[];
  className?: string;
}) {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className={className}>
      {items.map((item, index) => (
        <div key={item.label}>
          {index > 0 && <div className="my-8 h-px w-full bg-[var(--border)]" />}
          {item.staticValue != null ? (
            <div
              className={
                item.valueClassName ??
                "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]"
              }
              style={item.valueStyle}
            >
              {item.staticValue}
            </div>
          ) : (
            <CounterValue
              active={active}
              target={item.target ?? 0}
              duration={item.duration ?? 2000}
              format={item.format ?? ((n) => String(Math.round(n)))}
              className={
                item.valueClassName ??
                "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]"
              }
              style={item.valueStyle}
            />
          )}
          <div className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function AnimatedStatsGrid({
  items,
  wrapperClassName = "",
  gridClassName = "grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3",
  cellClassName = "bg-[#05050b] p-8 md:p-10",
  valueContainerClassName,
}: {
  items: AnimatedStatItem[];
  wrapperClassName?: string;
  gridClassName?: string;
  cellClassName?: string;
  valueContainerClassName?: string;
}) {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className={wrapperClassName}>
      <div className={gridClassName}>
        {items.map((item) => {
          const valueEl =
            item.staticValue != null ? (
              <div
                className={
                  item.valueClassName ??
                  "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]"
                }
                style={item.valueStyle}
              >
                {item.staticValue}
              </div>
            ) : (
              <CounterValue
                active={active}
                target={item.target ?? 0}
                duration={item.duration ?? 2000}
                format={item.format ?? ((n) => String(Math.round(n)))}
                className={
                  item.valueClassName ??
                  "font-[var(--font-syne)] font-extrabold leading-none text-[#F5E614]"
                }
                style={item.valueStyle}
              />
            );

          return (
            <div
              key={item.label}
              className={[cellClassName, item.cellClassName].filter(Boolean).join(" ")}
            >
              {valueContainerClassName ? (
                <div className={valueContainerClassName}>{valueEl}</div>
              ) : (
                valueEl
              )}
              <div className="mt-3 shrink-0 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
