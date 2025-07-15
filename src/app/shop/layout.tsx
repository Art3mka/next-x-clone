"use client";

import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

const DynamicShopMenu = dynamic(
  () => import("./ShopMenu").then((mod) => mod.ShopMenu),
  { ssr: false, loading: () => <div>Loading...</div> }
);

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="w-full bg-black">
      <h1 className="text-white text-3xl font-bold mb-6">Shop</h1>
      <DynamicShopMenu />
      {children}
    </div>
  );
}
