/* eslint-disable no-console */
import {
  registerApplication,
  start,
  addErrorHandler,
  getAppStatus,
  LOAD_ERROR,
  pathToActiveWhen,
} from "single-spa";
import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    topNav: "",
  },
  errors: {
    topNav: "<h1>Failed to load topnav</h1>",
  },
});
const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});
// const layoutEngine = constructLayoutEngine({
//   routes,
//   applications,
//   active: false,
// });

const router = (els) => {
  // console.log(els);
  return System.import(els.name);
};
// const activeWhen = (link) => {
//   // let action = pathToActiveWhen(link.href);
//   // let status = action(new URL(window.location.href));
//   // console.log({ status, link, href: window.location });
//   // return status ? link : false;
//   console.log({ link });
//   return link;
// };

applications.forEach((els) => {
  return registerApplication({
    ...els,
    app: router,
  });
});

// registerApplication({
//   name: "@medium/navbar",
//   app: router,
//   activeWhen: () => activeWhen("/"),
// });

// registerApplication({
//   name: "@medium/vue-app",
//   app: router,
//   activeWhen: () => activeWhen("/vue"),
// });

// registerApplication({
//   name: "@medium/navbar",
//   app: () => System.import("@medium/navbar"),
//   activeWhen: ["/"]
// });
// System.import("@react-mf/styleguide").then(() => {
//   // Activate the layout engine once the styleguide CSS is loaded
//   layoutEngine.activate();
//   start({
//     urlRerouteOnly: true,
//   });
// });

start({
  urlRerouteOnly: true,
});
//https://single-spa.js.org/docs/api/#handling-load_error-status-to-retry-module
addErrorHandler((err) => {
  if (getAppStatus(err.appOrParcelName) === LOAD_ERROR) {
    System.delete(System.resolve(err.appOrParcelName));
  }
});
