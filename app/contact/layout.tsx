import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - MobiNest",
  description:
    "Get in touch with MobiNest. Contact us for support, inquiries, or feedback.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
