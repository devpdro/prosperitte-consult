import type { Metadata } from "next";

import "src/presentation/styles/global.scss";

export const metadata: Metadata = {
  title: "Agnaldo Tomsic - Consultor em Alavancagem Patrimonial",
  description: "Estratégias inteligentes para construção de patrimônio através de consórcios e investimentos imobiliários. Consultoria personalizada em alavancagem patrimonial com Agnaldo Tomsic.",
  keywords: [
    "consórcio",
    "alavancagem patrimonial",
    "Agnaldo Tomsic",
    "consórcio imobiliário",
    "investimento imobiliário",
    "planejamento financeiro",
    "patrimônio",
    "renda passiva",
    "consultoria financeira",
    "estratégias de investimento"
  ],
  openGraph: {
    title: "Agnaldo Tomsic | Consultor em Alavancagem Patrimonial",
    description: "Estratégias inteligentes para construção de patrimônio através de consórcios e investimentos imobiliários. Consultoria personalizada em alavancagem patrimonial.",
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
