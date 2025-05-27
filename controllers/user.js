const userModel = require("../models/user");

function handlePromise(promise, reply) {
    promise
        .then((result) => reply.status(200).json(result))
        .catch((error) => reply.status(400).json(error.message));
}

class UserController {
    get(req, reply) {
        handlePromise(userModel.getAll(), reply);
    }

    post(req, reply) {
        const userSent = req.body;
        handlePromise(userModel.post(userSent), reply);
    }

    update(req, reply) {
        const { userName } = req.params;
        const userSent = req.body;
        handlePromise(userModel.update(userName, userSent), reply);
    }

    delete(req, reply) {
        const { userName } = req.params;
        handlePromise(userModel.delete(userName), reply);
    }
}

module.exports = new UserController();
