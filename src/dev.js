/* eslint-disable import/no-extraneous-dependencies */
const proxy = require("http-proxy-middleware");
const Parcel = require("parcel-bundler");
const express = require("express");
// const ipfilter = require("express-ipfilter").IpFilter;
// const { IpDeniedError } = require("express-ipfilter");

const bundler = new Parcel("src/index.html", {
  cache: false,
});

const expressApp = express();

// const customDetection = (req) => {
//   let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
//   ip = ip.replace("::ffff:", "");

//   return ip;
// };

// const ips = [];

// app.use(ipfilter(ips, { mode: "allow", detectIp: customDetection }));
// app.use((err, req, res, _next) => {
//   console.log("Error handler", err);
//   if (err instanceof IpDeniedError) {
//     res.status(401);
//   } else {
//     res.status(err.status || 500);
//   }

//   res.send("you shall not pass");
// });

expressApp.use(
  "/api",
  proxy({
    target: "http://127.0.0.1:8000",
    pathRewrite: {
      "/api": "",
    },
  }),
);

expressApp.use(bundler.middleware());
expressApp.listen(1234);
