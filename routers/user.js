const { Router } = require("express");
const userRouter = Router();

const userController = require("../controllers/user");

userRouter.get("/user", (req, reply) => {
    const response = userController.get();

    return reply.send({ method: "get", response });
});

userRouter.post("/user", (req, reply) => {
    const response = userController.post();

    return reply.send({ method: "post", response });
});

userRouter.put("/user/:userName", (req, reply) => {
    const { userName } = req.params;

    const response = userController.put(userName);
    return reply.send({ method: "put", response });
});

userRouter.delete("/user/:userName", (req, reply) => {
    const { userName } = req.params;

    const response = userController.delete(userName);
    return reply.send({ method: "delete", response });
});

module.exports = userRouter;
