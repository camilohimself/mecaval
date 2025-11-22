import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | Mecaval',
    default: 'Mecaval - Réparation rapide de machines | Savièse, Valais'
  },
  description: "Atelier de réparation de machines électriques, thermiques et vélos à Savièse. Service rapide en 48h, contact direct avec le réparateur, prix transparents.",
  keywords: ['réparation machines', 'Savièse', 'Valais', 'machines électriques', 'machines thermiques', 'vélos', 'entretien'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
