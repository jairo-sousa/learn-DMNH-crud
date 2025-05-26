const initSql = require("./initSql");

class Database {
    init(connection) {
        this.connection = connection;
        this.createAll();
    }

    createAll() {
        this.connection.query(initSql, (error) => {
            if (error) throw new Error(`Erro ao iniciar o banco: ${error.message}`);

            console.log("init database: sucess");
        });
    }
}

module.exports = new Database();
