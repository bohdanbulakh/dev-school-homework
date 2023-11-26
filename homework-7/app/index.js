const express = require('express');
const parser = require("body-parser");

const customersRouters = require("./routes/customersRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const employeesRoutes = require("./routes/employeesRoutes");
const productRoutes = require("./routes/productsRoutes");

const app = express();
const port = 3000;

app.use(parser.urlencoded({extended: false}));
app.use(parser.json());
app.use('/', customersRouters, ordersRoutes, employeesRoutes, productRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

