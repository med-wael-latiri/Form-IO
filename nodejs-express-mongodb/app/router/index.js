const express = require("express");
const tutorialsRoute = require("./tutorials");
const valuesRoute = require("./valuesRoutes");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/forms",
    route: tutorialsRoute,
  },
  {
    path: "/formvalues",
    route: valuesRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
