import type { Metadata } from "next";

import "src/presentation/styles/global.scss";

export const metadata: Metadata = {
  title: "Prospéritté Consult ",
  description: "Realize seus sonhos com a Prospéritté Consult, especialista em consórcios. Simule seu consórcio de forma rápida, segura e sem burocracia. Planeje seu futuro com as melhores condições do mercado!",
  keywords: [
    "consórcio",
    "simulação de consórcio",
    "Prospéritté Consult",
    "consórcio imobiliário",
    "consórcio de veículos",
    "consórcio online",
    "planejamento financeiro",
    "segurança",
    "sem juros",
    "carta de crédito"
  ],
  openGraph: {
    title: "Prospéritté Consult | Consórcio digital que cabe no seu plano de vida",
    description: "Realize seus sonhos com a Prospéritté Consult, especialista em consórcios. Simule seu consórcio de forma rápida, segura e sem burocracia. Planeje seu futuro com as melhores condições do mercado!",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
