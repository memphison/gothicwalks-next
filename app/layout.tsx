import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gothic Walks | Savannah Walking Ghost Tours",
  description:
    "A refined Savannah ghost tour through the city’s haunted streets, historic squares, and darker stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>
  {children}

  {/* Rezgo Widget Script */}


  {/* Metricool Tracker */}
  <Script
    id="metricool-tracker"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        function loadScript(a){
          var b=document.getElementsByTagName("head")[0],
          c=document.createElement("script");
          c.type="text/javascript";
          c.src="https://tracker.metricool.com/resources/be.js";
          c.onreadystatechange=a;
          c.onload=a;
          b.appendChild(c);
        }
        loadScript(function(){
          beTracker.t({hash:"b2b24e943275f132d04c2c438a1ab0be"});
        });
      `,
    }}
  />
</body>
    </html>
    
  );
}