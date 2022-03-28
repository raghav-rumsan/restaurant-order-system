const { withFrameworkConfig } = require("./framework/config");

/** @type {import('next').NextConfig} */

const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
});

module.exports = nextConfig;
