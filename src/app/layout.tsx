import type { Metadata } from "next";
import '@fontsource-variable/jetbrains-mono';
import "./globals.css";

export const metadata: Metadata = {
  icons: [
    'https://github.com/KoblizekXD.png'
  ],
  title: "AA55h's website",
  description: "Welcome to my personal website! You can find here various information about me.",
  keywords: ["aa55h", "koblizekxd", "personal website", "portfolio", "about me", "skills", "projects", "contacts", "terminal"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
