
//src/app/layout.js
import { Jost } from "next/font/google";

import '../styles/styles.scss';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Tastebox",
    template: '%s - Tastebox'
  },
  description: "Tastebox to meal!",
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={jost.className}>
        <div className="container"> 
        <Header />
        <main>{children}</main>
          <Footer />
          </div>
      </body>
    </html>
  );
}

//  https://realfavicongenerator.net/
// https://favicon.io/
