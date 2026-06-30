import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart - MobiNest",
  description: "Review your shopping cart and proceed to checkout at MobiNest.",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
