"use client";

import dynamic from "next/dynamic";

const PageTransition = dynamic(() => import("@/components/effects/PageTransition"), { ssr: false });

export default PageTransition;
