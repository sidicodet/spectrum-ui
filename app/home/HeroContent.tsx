import Image from 'next/image';
import { AnimatedBadge } from './AnimatedBadge';
import { AnimateEnter } from './AnimateEnter';
import { GridBackground } from './GridBackground';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="z-[3] flex flex-col items-center gap-16 sm:gap-28 text-center">
      <div>
        <div className="mb-5 sm:mb-8 space-y-4 sm:space-y-6">
          <AnimateEnter delay={0.1} duration={2} className="w-fit mx-auto">
            <AnimatedBadge />
          </AnimateEnter>
          <AnimateEnter delay={0.3} duration={2}>
            <h1 className="mx-auto text-center max-w-5xl px-4 font-bold text-2xl md:text-6xl leading-tight tracking-tight">
              <span className="block text-gradient mb-1">Premium UI Components</span>
              <span className="">
                Just Copy, Paste &amp; Ship
              </span>
            </h1>
          </AnimateEnter>
        </div>
        <AnimateEnter delay={0.5} duration={2} className="mb-6 sm:mb-8">
          <p className="container mx-auto md:max-w-xl text-[12px] sm:text-base text-foreground leading-relaxed">
            250+ Production-ready components crafted by Imoogle Technology. Built with Next.js, shadcn/ui, and Tailwind CSS for modern web applications.
          </p>
        </AnimateEnter>
        <AnimateEnter className="flex items-center justify-center gap-3" delay={0.7} duration={2}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 md:mt-6 w-full sm:w-auto px-5">
            <Link href="/docs/installation" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-2xl w-full sm:w-auto px-8">
                Explore Components
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>

            <div className="w-full sm:w-auto">
              <Link href="mailto:info@imoogleai.xyz">
                <Button variant="secondary" className="rounded-2xl w-full sm:w-auto px-8 h-11">
                  <div className="flex items-center gap-2">
                    <Mail className="size-4" />
                    <span>Get in Touch</span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </AnimateEnter>
      </div>
      <section className="w-full max-w-4xl mx-auto px-4">
        <AnimateEnter delay={0.9} duration={2} className="space-y-6">
          <h2 className="text-base font-medium text-muted-foreground uppercase tracking-wider">
            Powered By
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
            <Image
              src="/nextjs.svg"
              height={40}
              width={90}
              className="w-[80px] sm:w-[60px] md:w-[90px] transition-transform duration-300 hover:scale-105"
              alt="Next.js"
              loading="lazy"
              fetchPriority="low"
            />
            <Image
              src="/shadcn.svg"
              height={40}
              width={140}
              className="w-[100px] sm:w-[100px] md:w-[140px] transition-transform duration-300 hover:scale-105"
              alt="shadcn/ui"
              loading="lazy"
              fetchPriority="low"
            />
            <Image
              src="/tailwind.svg"
              height={40}
              width={120}
              className="w-[100px] sm:w-[90px] md:w-[120px] transition-transform duration-300 hover:scale-105"
              alt="Tailwind CSS"
              loading="lazy"
              fetchPriority="low"
            />
            <Image
              src="/aceternity.svg"
              height={40}
              width={160}
              className="w-[130px] sm:w-[120px] md:w-[160px] transition-transform duration-300 hover:scale-105"
              alt="Aceternity UI"
              loading="lazy"
              fetchPriority="low"
            />
          </div>
        </AnimateEnter>
      </section>

      <GridBackground />
    </div>
  );
}
