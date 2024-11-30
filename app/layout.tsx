import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font--poppins",
});

export const metadata: Metadata = {
  title: {
    default: "AceVault - Your ultimate vault for seamless, secure storage.",
    template: "%s | AceVault",
  },
  description:
    "AceVault is your go-to platform for seamless and secure storage solutions. Manage and protect your files with ease and reliability.",
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
        url: "https://AceVault.vercel.app/images/og.png",
        alt: "AceVault interface showcasing secure storage features.",
      },
    ],
  },
  twitter: {
    creatorId: "@AceVaultOfficial",
    description:
      "AceVault offers advanced secure storage solutions, ensuring your files are protected and easily accessible anytime, anywhere.",
    site: "https://AceVault.io/",
    creator: "@AceVaultOfficial",
    title: "AceVault - Your ultimate vault for seamless, secure storage.",
    card: "summary_large_image",
    images: [
      {
        url: "https://AceVault.vercel.app/images/big-og.png",
        width: 1200,
        height: 800,
        alt: "AceVault secure storage interface preview.",
      },
    ],
  },
  applicationName: "AceVault",
  category: "website",
  icons: [
    {
      url: "https://AceVault.vercel.app/images/og.png",
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
      <body className={`${poppins} font-poppins antialiased`}>{children}</body>
    </html>
  );
}
