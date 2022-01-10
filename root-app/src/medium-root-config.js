/* eslint-disable no-console */
import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@medium/navbar",
  app: (els) => {
    console.log(els);
    return System.import(els.name);
  },
  activeWhen: ["/"],
});

registerApplication({
  name: "@medium/vue-app",
  app: (els) => {
    console.log(els);
    return System.import(els.name);
  },
  activeWhen: ["/vue"],
});

// registerApplication({
//   name: "@medium/navbar",
//   app: () => System.import("@medium/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
