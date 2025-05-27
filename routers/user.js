const { Router } = require("express");
const userRouter = Router();

const userController = require("../controllers/user");

userRouter.get("/user", (req, reply) => {
    const response = userController.get();

    response
        .then((users) => {
            return reply.status(200).json(users);
        })
        .catch((error) => {
            return reply.status(400).json(error.message);
        });
});

userRouter.post("/user", (req, reply) => {
    const userSent = req.body;

    const response = userController.post(userSent);

    response
        .then((newUser) => {
            return reply.status(200).json(newUser);
        })
        .catch((error) => {
            return reply.status(400).json(error.message);
        });
});

userRouter.put("/user/:userName", (req, reply) => {
    const { userName } = req.params;
    const userSent = req.body;

    const response = userController.update(userName, userSent);

    response
        .then((atualUser) => {
            return reply.status(200).json(atualUser);
        })
        .catch((error) => {
            return reply.status(400).json(error.message);
        });
});

userRouter.delete("/user/:userName", (req, reply) => {
    const { userName } = req.params;

    const response = userController.delete(userName);

    response
        .then((deletedUser) => {
            return reply.status(200).json(deletedUser);
        })
        .catch((error) => {
            return reply.status(400).json(error.message);
        });
});

module.exports = userRouter;
