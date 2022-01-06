import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@medium/navbar",
  app: () => System.import("@medium/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@medium/next",
  app: () => System.import("@medium/next"),
  activeWhen: ["/next"],
});
// registerApplication({
//   name: "@medium/navbar",
//   app: () => System.import("@medium/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
