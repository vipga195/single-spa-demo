/* eslint-disable no-console */
import { registerApplication, start } from "single-spa";

const router = (els) => {
  // console.log(els);
  return System.import(els.name);
};

registerApplication({
  name: "@medium/navbar",
  app: router,
  activeWhen: ["/"],
});

registerApplication({
  name: "@medium/vue-app",
  app: router,
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
