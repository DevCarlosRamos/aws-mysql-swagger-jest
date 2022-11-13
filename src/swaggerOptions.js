const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Prueba API",
            version: "1.0.0",
            description: "documentación de la api creada",
        },
        servers: [
            {
                url: "http://localhost:4000",
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};

module.exports = options;