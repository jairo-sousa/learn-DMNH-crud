const userModel = require("../models/user");

class UserController {
    get(req, reply) {
        const userSent = req.body;

        const response = userModel.getAll();

        response
            .then((newUser) => {
                return reply.status(200).json(newUser);
            })
            .catch((error) => {
                return reply.status(400).json(error.message);
            });
    }

    post(req, reply) {
        const userSent = req.body;

        const response = userModel.post(userSent);

        response
            .then((newUser) => {
                return reply.status(200).json(newUser);
            })
            .catch((error) => {
                return reply.status(400).json(error.message);
            });
    }

    update(req, reply) {
        const { userName } = req.params;
        const userSent = req.body;

        const response = userModel.update(userName, userSent);

        response
            .then((atualUser) => {
                return reply.status(200).json(atualUser);
            })
            .catch((error) => {
                return reply.status(400).json(error.message);
            });
    }

    delete(req, reply) {
        const { userName } = req.params;

        const response = userModel.delete(userName);

        response
            .then((deletedUser) => {
                return reply.status(200).json(deletedUser);
            })
            .catch((error) => {
                return reply.status(400).json(error.message);
            });
    }
}

module.exports = new UserController();
