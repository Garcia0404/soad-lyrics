import type { Metadata } from "next";
import "./globals.css";
import { oswald } from "app/ui/fonts";

export const metadata: Metadata = {
  title: "System of a Down | Lyrics",
  description: "Explora el universo lírico de System of a Down con nuestra colección completa de letras de todas sus canciones. Desde su debut homónimo hasta 'Toxicity', 'Steal This Album!' y 'Hypnotize/Mezmerize', aquí encontrarás cada verso, coro y estrofa de la banda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} antialiased min-h-[200vh] bg-black text-white`}
      >
        {children}
      </body>
    </html >
  );
}
