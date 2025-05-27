const connection = require("../database/conection");
const sql = require("./queries");

class UserModel {
    getAll() {
        return new Promise((resolve, reject) => {
            connection.query(sql.userGetAll, {}, (error, response) => {
                if (error) reject(error);

                resolve(response);
            });
        });
    }

    post(userSent) {
        return new Promise((resolve, reject) => {
            connection.query(sql.userPost, userSent, (error, response) => {
                if (error) reject(error);

                resolve(response);
            });
        });
    }
}

module.exports = new UserModel();
