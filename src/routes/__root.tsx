import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ProCertum — Certyfikacja Profesjonalistów" },
      {
        name: "description",
        content:
          "System weryfikowalnych, cyfrowych badge'ów certyfikacyjnych dla wysokospecjalizowanych profesjonalistów. Potwierdź swoje kwalifikacje i buduj zaufanie na rynku.",
      },
      {
        name: "keywords",
        content:
          "certyfikacja, badge, audytor, compliance, AML, cyberbezpieczeństwo, risk management, profesjonaliści, ProCertum",
      },
      { property: "og:title", content: "ProCertum — Certyfikacja Profesjonalistów" },
      {
        property: "og:description",
        content:
          "System weryfikowalnych, cyfrowych badge'ów certyfikacyjnych dla wysokospecjalizowanych profesjonalistów.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
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