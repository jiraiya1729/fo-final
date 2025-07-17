import { cn } from "@/lib/utils";
import {
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export function CenteredWithLogo() {
  const pages = [
    {
      title: "Community Guidelines",
      href: "#",
    },
    {
      title: "Initiatives", 
      href: "#",
    },
    {
      title: "Apply",
      href: "#",
    },
    {
      title: "Privacy Policy",
      href: "#",
    },
    {
      title: "Code of Conduct",
      href: "#",
    },
  ];

  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500  justify-between items-start  md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Logo />
          </div>

          <ul className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none gap-4">
            {pages.map((page, idx) => (
              <li key={"pages" + idx} className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800 "
                  href="/products"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 sm:mb-0">
            &copy; 2024 First Order. Building the future, one founder at a time.
          </p>
          <div className="flex gap-4">
            <Link href="#">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="#">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="#">
              <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="#">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="#">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <span className="font-[var(--font-display)] text-xl font-medium text-foreground">First Order</span>
    </Link>
  );
};