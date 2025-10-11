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
    title: "Agnaldo Tomsic - Consultor em Alavancagem Patrimonial",
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
      <head>
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="hfxt9to4latvpf7hmdq5fbpq3shna4" />
        
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '309625491765915');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=309625491765915&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TXQKVJ6Q');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXQKVJ6Q"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
