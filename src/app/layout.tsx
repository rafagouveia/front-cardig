import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cardig",
  description: "Seu cardpio digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  lang="pt-br">
      <link rel="apple-touch-icon" href="/img/icon-cardig-512.png" />
      <link rel="shortcut icon" href="/img/icon-cardig-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Best PWA App in the world" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
