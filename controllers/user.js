const userModel = require("../models/user");

class UserController {
    get() {
        return userModel.getAll();
    }
    post(userSent) {
        return userModel.post(userSent);
    }
    update(userName) {
        return { operation: `Update user ${userName}` };
    }
    delete(userName) {
        return { operation: `Delete user ${userName}` };
    }
}

module.exports = new UserController();
