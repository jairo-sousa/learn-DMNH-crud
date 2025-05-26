const { Router } = require("express");
const userRouter = Router();

userRouter.get("/user", (req, res) => {
    return res.send({ hello: "world" });
});

module.exports = userRouter;
