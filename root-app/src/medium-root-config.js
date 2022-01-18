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
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

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
// layoutEngine.activate();
start({
  urlRerouteOnly: true,
});

//https://single-spa.js.org/docs/api/#handling-load_error-status-to-retry-module
addErrorHandler((err) => {
  if (getAppStatus(err.appOrParcelName) === LOAD_ERROR) {
    System.delete(System.resolve(err.appOrParcelName));
  }
});
window.addEventListener("single-spa:before-routing-event", (evt) => {
  const {
    originalEvent,
    newAppStatuses,
    appsByNewStatus,
    totalAppChanges,
    oldUrl,
    newUrl,
    navigationIsCanceled,
    cancelNavigation,
  } = evt.detail;
  // console.log({ evt: evt.detail });
  // console.log(
  //   "original event that triggered this single-spa event",
  //   originalEvent
  // ); // PopStateEvent | HashChangeEvent | undefined
  // console.log(
  //   "the new status for all applications after the reroute finishes",
  //   newAppStatuses
  // ); // { app1: MOUNTED, app2: NOT_MOUNTED }
  // console.log(
  //   "the applications that changed, grouped by their status",
  //   appsByNewStatus
  // ); // { MOUNTED: ['app1'], NOT_MOUNTED: ['app2'] }
  // console.log(
  //   "number of applications that changed status so far during this reroute",
  //   totalAppChanges
  // ); // 2
  // console.log("the URL before the navigationEvent", oldUrl); // http://localhost:8080/old-route
  // console.log("the URL after the navigationEvent", newUrl); // http://localhost:8080/new-route
  // console.log("has the navigation been canceled", navigationIsCanceled); // false
  // The cancelNavigation function is only defined in the before-routing-event
  // evt.detail.cancelNavigation();
});
