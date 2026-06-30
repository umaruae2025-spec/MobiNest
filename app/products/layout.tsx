import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details - MobiNest",
  description: "View detailed information about our premium tech products.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
