import type { Metadata } from "next";

import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { GoogleTagManager } from "@next/third-parties/google";


export const metadata: Metadata = {
  title: "Webdesign and Mobile Development - Heligon Systems",
  description: "Best Web and Mobile Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
    <GoogleTagManager gtmId="GTM-WWPXG74M"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="icon" href="/favicon.png" sizes="any" />
    <link rel="stylesheet" href="/assets/fontawesome/css/fontawesome.css"/>
    <link rel="stylesheet" href="/assets/fontawesome/css/brands.css"/>
    <link rel="stylesheet" href="/assets/fontawesome/css/solid.css"/>
    <link rel="stylesheet" href="/assets/css/all.css"/>
    <link rel="stylesheet" href="/assets/css/custom.css"/>
    </head>

      <body>
      <div>
      <Header />
      {children}
      </div>
      <Footer/>

    {/* <script src="/assets/js/vendor/jquery-3.6.0.min.js"></script> */}
    <script src="/assets/js/bootstrap.bundle.min.js"></script>
    {/* <script src="/assets/js/jquery.appear.js"></script>
    <script src="/assets/js/gsap.js"></script>
    <script src="/assets/js/ScrollTrigger.js"></script>
    <script src="/assets/js/SplitText.js"></script>
    <script src="/assets/js/gsap-animation.js"></script>
    <script src="/assets/js/jquery.parallaxScroll.min.js"></script>
    <script src="/assets/js/swiper-bundle.js"></script>
    <script src="/assets/js/wow.min.js"></script>
    <script src="/assets/js/aos.js"></script> */}
    {/* <script src="/assets/js/main.js"></script> */}
    
      </body>
    </html>
  );
}
