import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "AceVault - Your ultimate vault for seamless, secure storage.",
    template: "%s | AceVault",
  },
  keywords:
    "secure storage, file vault, privacy, cloud storage, AceVault, secure file management",
  openGraph: {
    description:
      "AceVault is your go-to platform for seamless and secure storage solutions. Manage and protect your files with ease and reliability.",
    title: "AceVault - Your ultimate vault for seamless, secure storage.",
    type: "website",
    url: "https://AceVault.vercel.app/",
    siteName: "AceVault",
    images: [
      {
        url: "https://AceVault.vercel.app/assets/images/og.png",
        alt: "AceVault homepage showcasing secure file management features.",
      },
    ],
  },
  twitter: {
    creatorId: "@AceVault",
    description:
      "AceVault is your go-to platform for seamless and secure storage solutions. Manage and protect your files with ease and reliability.",
    site: "https://AceVault.vercel.app/",
    creator: "@AceVault",
    title: "AceVault - Your ultimate vault for seamless, secure storage.",
    card: "summary_large_image",
    images: [
      {
        url: "https://eduviti.me/big.png",
        width: 1200,
        height: 800,
        alt: "AceVault homepage showcasing secure file management features.",
      },
    ],
  },
  applicationName: "AceVault",
  category: "website",
  icons: [
    {
      url: "https://AceVault.vercel.app/assets/images/og.png",
      type: "image/png",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
