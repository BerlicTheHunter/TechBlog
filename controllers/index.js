// * -----Required Modules----- * \\
const router = require("express").Router();

// * -----Required Route Path Variables----- * \\
// view route variables
const homeViewRoute = require("./view/home");
const dashboardRoutes = require("./view/dashboard");
const authViewRoute = require("./view/auth");
const blogViewRoute = require("./view/blog");
// api route variables
const authApiRoute = require("./api/auth");
const blogApiRoute = require("./api/blog");
const commentApiRoute = require("./api/comment");

// * -----Routes----- * \\
// view routes
router.use("/", homeViewRoute);
router.use("/dashboard", dashboardRoutes);
router.use("/", authViewRoute);
router.use("/blogs", blogViewRoute);
// api routes
router.use("/api", authApiRoute);
router.use("/api/blogs", blogApiRoute);
router.use("/api/comments", commentApiRoute);

// * -----Exports-----*\\
module.exports = router;