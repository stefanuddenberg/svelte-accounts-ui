Package.describe({
  name: "levelup:svelte-accounts-ui",
  version: "0.0.6",
  summary: "The simplicity of Blaze drop in ui, but in Svelte",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/leveluptuts/svelte-accounts-ui",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md",
});

Package.onUse(function (api) {
  api.use("ecmascript@0.14.3");
  api.use("svelte:compiler@3.16.4_1");
  api.use("accounts-base@1.6.0");
  api.use("accounts-password@1.6.0");
  api.mainModule("svelte-accounts-ui.js");
});

// Package.onTest(function (api) {
//   api.use("ecmascript");
//   api.use("tinytest");
//   api.use("svelte-accounts-ui");
//   api.mainModule("svelte-accounts-ui-tests.js");
// });
