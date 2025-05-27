const userModel = require("../models/user");

class UserController {
    get() {
        return userModel.getAll();
    }
    post(userSent) {
        return userModel.post(userSent);
    }
    update(userName, userSent) {
        return userModel.update(userName, userSent);
    }
    delete(userName) {
        return { operation: `Delete user ${userName}` };
    }
}

module.exports = new UserController();
