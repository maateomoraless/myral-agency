"use client";

import dynamic from "next/dynamic";

const PageLoader = dynamic(() => import("@/components/effects/PageLoader"), { ssr: false });

export default PageLoader;
