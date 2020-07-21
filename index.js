const express = require("express");

const itemsRouter = require("./items/router");

const app = express();
const jsonParser = express.json();

const port = process.env.PORT || 4000;

app.listen(port, console.log(`Server started on port: ${port}`));

app.use(jsonParser);

/* SERVER ROUTERS */

app.use(itemsRouter);
