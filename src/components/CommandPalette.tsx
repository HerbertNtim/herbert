import { Command } from "cmdk";
import {
  ArrowUpRight,
  BookOpen,
  Clock,
  FileText,
  Folder,
  House,
  Mail,
  Terminal,
  User,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { ComponentType } from "react";
import { useNavigate } from "react-router";

type PaletteIcon = ComponentType<{ className?: string }>;

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect height="12" width="4" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const navigation: { label: string; href: string; icon: PaletteIcon }[] = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: User },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Resume", href: "/resume", icon: FileText },
  { label: "Uses", href: "/uses", icon: Terminal },
  { label: "Now", href: "/now", icon: Clock },
];

const social: { label: string; href: string; icon: PaletteIcon }[] = [
  { label: "GitHub", href: "https://github.com/HerbertNtim", icon: GitHubIcon },
  { label: "X (Twitter)", href: "https://x.com/leonardomso", icon: ArrowUpRight },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hntim/",
    icon: LinkedInIcon,
  },
  { label: "Email", href: "mailto:herbertntim2023@gmail.com", icon: Mail },
];

const itemClass =
  "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] text-fg-secondary transition-colors data-[selected=true]:bg-surface-border data-[selected=true]:text-fg";

const groupClass =
  "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.15em] [&_[cmdk-group-heading]]:text-fg-tertiary [&_[cmdk-group-heading]]:uppercase";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      if (href.startsWith("http") || href.startsWith("mailto:")) {
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }
      navigate(href);
    },
    [navigate],
  );

  if (!open) return null;

  return (
    <div
      aria-label="Command palette"
      aria-modal="true"
      className="no-print fixed inset-0 z-10001 flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
      role="dialog"
    >
      <div aria-hidden="true" className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative z-10 mx-4 w-full max-w-130 overflow-hidden rounded-xl border border-surface-border bg-surface-low shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.stopPropagation();
            setOpen(false);
          }
        }}
        role="document"
      >
        <Command
          className="flex flex-col"
          filter={(value, search) =>
            value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0
          }
          label="Command palette"
        >
          <Command.Input
            autoFocus
            className="w-full border-b border-surface-border bg-transparent px-4 py-3 text-[15px] text-fg outline-none placeholder:text-fg-disabled"
            placeholder="Type a command or search..."
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-[13px] text-fg-tertiary">
              No results found.
            </Command.Empty>
            <Command.Group className={groupClass} heading="Navigation">
              {navigation.map((item) => (
                <Command.Item
                  key={item.href}
                  className={itemClass}
                  onSelect={() => go(item.href)}
                  value={item.label}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group className={groupClass} heading="Social">
              {social.map((item) => (
                <Command.Item
                  key={item.href}
                  className={itemClass}
                  onSelect={() => go(item.href)}
                  value={item.label}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                  <ArrowUpRight className="ml-auto h-3 w-3 text-fg-disabled" />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
          <div className="flex items-center justify-between border-t border-surface-border px-4 py-2">
            <span className="font-mono text-[10px] text-fg-disabled">
              Navigate with · Select with ↵ · Close with Esc
            </span>
            <kbd className="rounded border border-surface-border-strong px-1.5 py-0.5 font-mono text-[10px] text-fg-disabled">
              ⌘K
            </kbd>
          </div>
        </Command>
      </div>
    </div>
  );
}
