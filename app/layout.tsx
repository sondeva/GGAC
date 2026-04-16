import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Gerardo Gabriel Alfaro Calderón — Profesor e Investigador",
  description:
    "Sitio académico del Dr. Gerardo Gabriel Alfaro Calderón. Profesor e Investigador Titular, UMSNH — FCCA. Especialista en sistemas difusos, inteligentes y expertos aplicados a la gestión.",
  openGraph: {
    title: "Dr. Gerardo Gabriel Alfaro Calderón",
    description:
      "Profesor e Investigador Titular, UMSNH — FCCA. Sistemas difusos, inteligentes y expertos.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#fbfaf7]">{children}</body>
    </html>
  );
}
