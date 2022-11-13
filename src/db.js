const mysql = require("mysql2/promise");

const connection = async () => {
    return await mysql.createConnection({
        host: process.env.DB_HOST || "aws-sa-east-1.connect.psdb.cloud",
        user: process.env.DB_USER || "1t5mnu2dmgizqopszfpm",
        password: process.env.DB_PASSWORD || "pscale_pw_DQziXIHgwFfmOrwTeoP94XbboHNcowSrAZdXij0zpsE",
        database: process.env.DB_DATABASE || "prueba",
        ssl: {}
    });
};

module.exports = connection;