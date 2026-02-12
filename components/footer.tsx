"use client";
import Link from "next/link";
import { Icons } from "./icon";
import { Mail, Globe, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-4 md:px-6 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand Section */}
          <div className="max-w-sm">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              <div className="h-6 w-6 bg-neutral-100 border-neutral-300 border dark:bg-foreground rounded-md flex items-center justify-center p-1">
                <Icons.logo className="h-5 w-5 text-background" />
              </div>
              <span className="font-bold lg:inline-block">Imoogle UI</span>
            </Link>

            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Premium UI component library crafted by Imoogle Technology. Build beautiful, 
              accessible, and production-ready web applications faster.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Link
                href="mailto:info@imoogleai.xyz"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4" />
                <span>info@imoogleai.xyz</span>
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Link
                href="https://imoogleai.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Visit Imoogle Technology website"
              >
                <Globe className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/imoogletechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Follow Imoogle Technology on X"
              >
                <Icons.twitter className="h-3 w-3" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/imoogletechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Follow Imoogle Technology on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Product</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/installation"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blocks"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blocks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/colors"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Colors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="https://imoogleai.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Imoogle Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:info@imoogleai.xyz"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tos"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Imoogle Technology. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Imoogle UI is a proprietary product of Imoogle Technology.
          </p>
        </div>

        {/* Large Brand Text */}
        <div className="w-full flex mt-8 items-center justify-center">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-800 select-none">
            IMOOGLE UI
          </h1>
        </div>
      </div>
    </footer>
  );
}
