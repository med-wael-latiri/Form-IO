const express = require("express");
const tutorialsRoute = require("./tutorials");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/enumerated-list",
    route: tutorialsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
