class UserController {
    get() {
        return { message: "Get users" };
    }
    post() {
        return { message: "Create user" };
    }
    update(userName) {
        return { message: `Update user ${userName}` };
    }
    delete(userName) {
        return { message: `Delete user ${userName}` };
    }
}

module.exports = new UserController();
