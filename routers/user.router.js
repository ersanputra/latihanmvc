const express = require("express");
const UserExpressController = require("../controllers/user.express.controller");
const userRouter = express.Router();
const userExpressController = new UserExpressController();

userRouter.post("/registrasi", userExpressController.registration);
userRouter.post("/login", userExpressController.login);

module.exports = userRouter;