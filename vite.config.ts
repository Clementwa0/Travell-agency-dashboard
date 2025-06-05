import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "klemoh",
  project: "travel",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), 
    reactRouter(), sentryReactRouter(sentryConfig, config)],


  ssr: {
    noExternal: [
      "@syncfusion"]

  }
  }
});
