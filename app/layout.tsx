import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "BoobieDigital - Transforme suas fotos em arte",
  description:
    "Envie suas fotos e receba ilustrações pintadas no estilo boobie goods. Arte personalizada a partir de R$8,90.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Código do Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
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
              fbq('init', '1076100644071297');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        {/* NoScript para usuários sem JS */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1076100644071297&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
      </body>
    </html>
  )
}
