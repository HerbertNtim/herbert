import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { CommandPalette } from "./CommandPalette";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
];

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-10002 focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>
      <CommandPalette />
      <div className="relative mx-auto w-full max-w-170 px-5 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-24 md:px-0">
        <header className="mb-12 flex items-center justify-between gap-4 sm:mb-20">
          <Link
            to="/"
            className="link-hover hidden py-1.5 font-mono text-[13px] tracking-wide text-fg-muted uppercase transition-colors hover:text-fg sm:inline-block"
          >
            Herbert Ntim
          </Link>
          <nav
            aria-label="Main navigation"
            className="flex w-full justify-between gap-4 sm:w-auto sm:justify-end sm:gap-6"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="link-hover py-1.5 text-[13px] tracking-wide text-fg-tertiary uppercase transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main id="main-content">
          <Outlet />
        </main>
        <footer className="mt-20 flex flex-col-reverse items-start justify-between gap-4 border-t border-surface-border pt-8 sm:mt-32 sm:flex-row sm:items-center sm:gap-0">
          <p className="font-mono text-[11px] tracking-wider text-fg-tertiary">
            © {new Date().getFullYear()}
          </p>
          <nav aria-label="Social links" className="flex gap-6">
            <a
              href="https://github.com/HerbertNtim"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover py-1.5 text-[12px] tracking-wide text-fg-tertiary transition-colors hover:text-fg"
            >
              GitHub
            </a>
            <a
              href="https://x.com/hntim0829"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover py-1.5 text-[12px] tracking-wide text-fg-tertiary transition-colors hover:text-fg"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/hntim/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover py-1.5 text-[12px] tracking-wide text-fg-tertiary transition-colors hover:text-fg"
            >
              LinkedIn
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
