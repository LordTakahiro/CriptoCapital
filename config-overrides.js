const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: false, // require.resolve("crypto-browserify") can be polyfilled here if needed
    stream: false, // require.resolve("stream-browserify") can be polyfilled here if needed
    assert: false, // require.resolve("assert") can be polyfilled here if needed
    http: false, // require.resolve("stream-http") can be polyfilled here if needed
    https: false, // require.resolve("https-browserify") can be polyfilled here if needed
    os: false, // require.resolve("os-browserify") can be polyfilled here if needed
    url: false, // require.resolve("url") can be polyfilled here if needed
    zlib: false, // require.resolve("browserify-zlib") can be polyfilled here if needed
    path: false, // require.resolve("path-browserify") can be polyfilled here if needed
    constants: false, // require.resolve("constants-browserify") can be polyfilled here if
    fs: false,       // Disable 'fs' since it's not usable in the browser
    net: false,      // Disable 'net' since it's not usable in the browser
    tls: false,      // Disable 'tls' since it's not usable in the browser
    child_process: false,  // Disable 'child_process' since it's not usable in the browser
    readline: false, // Disable 'readline' since it's not usable in the browser
    dns: false,      // Disable 'dns' since it's not usable in the browser
    module: false, // Disable 'module
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  config.ignoreWarnings = [/Failed to parse source map/];
  config.module.rules.push({
    test: /\.(js|mjs|jsx)$/,
    enforce: "pre",
    loader: require.resolve("source-map-loader"),
    resolve: {
      fullySpecified: false,
    },
  });
  return config;
};