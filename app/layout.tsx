import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rehkitzrettung Riggisberg–Gantrisch",
  description:
    "Drohnen-Rehkitzrettung in der Region Riggisberg und Gantrisch. Bauern können online einen Termin reservieren, damit ihr Feld vor dem Mähen mit der Wärmebild-Drohne nach Rehkitzen abgesucht wird.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
