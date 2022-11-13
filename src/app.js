const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
//database
const db = require("./db");
//routes
const routerPeoples = require('./routes/index.routes');
// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options = require("./swaggerOptions");


const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const specs = swaggerJsDoc(options);

//routes
app.use(routerPeoples);
app.use("/", swaggerUI.serve, swaggerUI.setup(specs));



module.exports = app;