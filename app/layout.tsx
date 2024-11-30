import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "EduViti - Your all in one Online Study platform.",
    template: "%s | EduViti",
  },
  keywords:
    "education, learning, online education, study platform, maths, science, free study material",
  openGraph: {
    description:
      "EduViti is an explorable platform offering Maths and Science materials, including exclusive notes, video lectures, question banks, and more, making it easy for students to access everything!",
    title: "EduViti - Your all in one Online Study platform.",
    type: "website",
    url: "https://EduViti.me/",
    siteName: "EduViti",
    images: [
      {
        url: "https://EduViti.me/og.png",
        alt: "EduViti homepage showcasing Maths and Science learning resources.",
      },
    ],
  },
  twitter: {
    creatorId: "@EduVitiOfficial",
    description:
      "EduViti is an online learning platform offering Maths and Science resources including notes, video lectures, and more.",
    site: "https://EduViti.me/",
    creator: "@EduVitiOfficial",
    title: "EduViti - Your all in one Online Study platform.",
    card: "summary_large_image",
    images: [
      {
        url: "https://EduViti.me/big.png",
        width: 1200,
        height: 800,
        alt: "EduViti homepage showcasing Maths and Science learning resources.",
      },
    ],
  },
  applicationName: "EduViti",
  category: "website",
  icons: [
    {
      url: "https://EduViti.me/icon.png",
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
