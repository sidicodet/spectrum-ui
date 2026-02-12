'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icon';
import { MobileNav } from '@/components/mobile-nav';
import { MainNav } from './main-nav';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-grid sticky top-0 z-[50]  w-full border-b bg-background/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper ">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MobileNav />
          <MainNav />

          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <Link
              href="mailto:info@imoogleai.xyz"
              className="hidden md:flex items-center gap-2 bg-neutral-100 border dark:bg-secondary rounded-md px-5 h-9 hover:bg-neutral-200 dark:hover:bg-secondary/80 transition-colors"
            >
              <div className="flex flex-col xl:flex-row gap-3 items-center">
                <p className="text-sm font-medium hidden lg:block">Contact Us</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              <Link 
                href={siteConfig.links.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <Icons.twitter className="h-3 w-4 mr-2" />
              </Link>
            </div>

            <nav className="flex items-center gap-0.5">
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
