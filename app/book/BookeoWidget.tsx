"use client";

import { useEffect } from "react";

export default function BookeoWidget() {
  useEffect(() => {
    const existing = document.getElementById("bookeo-widget-script");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "bookeo-widget-script";
    script.type = "text/javascript";
    script.src = "https://bookeo.com/widget.js?a=41568N9XYY19DCA3560F1";

    const container = document.getElementById("bookeo-widget");
    container?.appendChild(script);
  }, []);

  return <div id="bookeo-widget" className="min-h-[800px]" />;
}