const { Router } = require("express");
const userRouter = Router();
exports.userRouter = userRouter;

const userController = require("../controllers/user");

userRouter.get("/user", userController.get);

userRouter.post("/user", userController.post);

userRouter.put("/user/:userName", userController.update);

userRouter.delete("/user/:userName", userController.delete);

module.exports = userRouter;
