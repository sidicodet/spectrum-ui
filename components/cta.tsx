import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Cta = () => {
  return (
   <div className="flex flex-col items-center justify-center min-h-[40vh] py-5">
    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Ready to build?</p>
    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:leading-[67.20px] [text-shadow:_1px_1px_0px_rgb(0_0_0_/_0.10)] text-balance">
    Your Product 
    <br />
    Deserves a Premium UI
    </h1>
    <p className="text-muted-foreground text-center max-w-md mb-6 text-sm leading-relaxed">
      Ship faster with 250+ beautifully crafted components. Built by Imoogle Technology for modern web applications.
    </p>
    <div className="flex items-center gap-3">
      <Link href="/docs/installation">
        <Button className="rounded-full text-sm px-6">
          Get Started
        </Button>
      </Link>
      <Link href="mailto:info@imoogleai.xyz">
        <Button variant="outline" className="rounded-full text-sm px-6">
          Contact Us
        </Button>
      </Link>
    </div>
   </div>
  );
};

export default Cta;
