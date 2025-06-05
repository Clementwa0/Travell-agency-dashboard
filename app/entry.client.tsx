import * as Sentry from "@sentry/react-router";
 import { startTransition, StrictMode } from "react";
 import { hydrateRoot } from "react-dom/client";
 import { HydratedRouter } from "react-router/dom";

Sentry.init({
 dsn: "https://a87ebb4f2d147f046f4fd0c2db8dcdeb@o4507661153206272.ingest.de.sentry.io/4509253460361296",
 
 // Adds request headers and IP for users, for more info visit:
 // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
 sendDefaultPii: true,
 
 integrations: [
   Sentry.reactRouterTracingIntegration(),
   Sentry.replayIntegration(),
 ],
 tracesSampleRate: 1.0, //  Capture 100% of the transactions
 // Set `tracePropagationTargets` to declare which URL(s) should have trace propagation enabled
 tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],
 // Capture Replay for 10% of all sessions,
 // plus 100% of sessions with an error
 replaysSessionSampleRate: 0.1,
 replaysOnErrorSampleRate: 1.0,
});

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
