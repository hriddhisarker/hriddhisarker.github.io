import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hriddhi Sarker — Bioinformatics Researcher" },
      {
        name: "description",
        content:
          "Portfolio for Hriddhi Sarker, a computational drug design and bioinformatics researcher bridging biology and AI.",
      },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Hriddhi Sarker — Bioinformatics Researcher" },
      {
        property: "og:description",
        content:
          "Computational drug design, molecular biology, systems biology, and biomedical AI research portfolio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Hriddhi Sarker — Bioinformatics Researcher" },
      { name: "description", content: "A modern portfolio website showcasing a bioinformatics researcher's expertise in computational drug design and molecular biology." },
      { property: "og:description", content: "A modern portfolio website showcasing a bioinformatics researcher's expertise in computational drug design and molecular biology." },
      { name: "twitter:description", content: "A modern portfolio website showcasing a bioinformatics researcher's expertise in computational drug design and molecular biology." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/19eed95b-1ab8-43e9-a15b-edf2e1810ccb/id-preview-76482569--3357c486-5e12-458c-8532-62298d15f908.lovable.app-1777382466084.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/19eed95b-1ab8-43e9-a15b-edf2e1810ccb/id-preview-76482569--3357c486-5e12-458c-8532-62298d15f908.lovable.app-1777382466084.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
