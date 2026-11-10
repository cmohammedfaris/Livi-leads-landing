import { Sora, Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";
import GlobalPreRegistrationModal from "@/components/landing/GlobalPreRegistrationModal";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export const metadata = {
  metadataBase: new URL("https://www.livileads.com"),
  title: "LIVI LEADS | Business Growth & Management Platform",
  description: "More Connections. More Opportunities. Better Business. A connected platform designed to help businesses move forward and customers find the services they need.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "LIVI LEADS | Business Growth & Management Platform",
    description: "More Connections. More Opportunities. Better Business. A connected platform designed to help businesses move forward and customers find the services they need.",
    url: "https://www.livileads.com",
    siteName: "Livi Leads",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Livi Leads Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "LIVI LEADS | Business Growth & Management Platform",
    description: "More Connections. More Opportunities. Better Business. A connected platform designed to help businesses move forward and customers find the services they need.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N876Z9JX');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Livi Leads",
              "url": "https://www.livileads.com",
              "logo": "https://www.livileads.com/icon.png",
              "sameAs": [
                "https://www.livileads.com"
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} min-h-full bg-[#FAFAFC] dark:bg-darkprimary transition-colors duration-300 flex flex-col font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N876Z9JX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider>
          <LandingNavbar />
          <main className="flex-grow pt-[72px] sm:pt-[80px] w-full overflow-x-clip">
            {children}
          </main>
          <LandingFooter />
          <GlobalPreRegistrationModal />
        </ThemeProvider>
      </body>
    </html>
  );
}