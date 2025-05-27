const connection = require("../database/conection");
const sql = require("./userQueries");

class UserModel {
    getAll() {
        return new Promise((resolve, reject) => {
            connection.query(sql.getAll, {}, (error, response) => {
                if (error) reject(error);

                resolve(response);
            });
        });
    }

    post(userSent) {
        return new Promise((resolve, reject) => {
            connection.query(sql.post, userSent, (error, response) => {
                if (error) reject(error);

                resolve(response);
            });
        });
    }

    update(userName, userSent) {
        return new Promise((resolve, reject) => {
            connection.query(sql.update, [userSent, userName], (error, response) => {
                if (error) reject(error);

                resolve(response);
            });
        });
    }
}

module.exports = new UserModel();
