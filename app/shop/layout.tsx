import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - MobiNest",
  description:
    "Browse our complete collection of smartphones, tablets, accessories, and wearables.",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
