const express = require("express");
const db = require("./configs/pgConfig");
const ApiError = require("./utils/apiError");
const httpStatus = require("http-status");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./configs/swagger");
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, `Not found: ${req.url}`));
});

module.exports = app;
