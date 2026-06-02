import { calButtonProps } from "@/lib/cal";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type CalButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function CalButton({
  children,
  className = "",
  type = "button",
  ...props
}: CalButtonProps) {
  return (
    <button
      type={type}
      className={className}
      {...calButtonProps}
      {...props}
    >
      {children}
    </button>
  );
}
