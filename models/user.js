const connection = require("../database/conection");
const sqlUser = require("./userQueries");

class UserModel {
    runQuery(sql, params = []) {
        return new Promise((resolve, reject) => {
            connection.query(sql, params, (error, response) => {
                if (error) reject(error);

                resolve(response);
            });
        });
    }
    getAll() {
        return this.runQuery(sqlUser.getAll);
    }

    post(userSent) {
        return this.runQuery(sqlUser.post, userSent);
    }

    update(userName, userSent) {
        return this.runQuery(sqlUser.update, [userSent, userName]);
    }

    delete(userName) {
        return this.runQuery(sqlUser.remove, userName);
    }
}

module.exports = new UserModel();
