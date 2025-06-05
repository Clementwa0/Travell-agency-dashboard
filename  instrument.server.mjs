import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://a87ebb4f2d147f046f4fd0c2db8dcdeb@o4507661153206272.ingest.de.sentry.io/4509253460361296",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
