const express = require('express');
const app = express();

const routes = require('./Routers/routes');

app.get('/', (req,res)=>{res.status(200).send("This test for Microservices")})

app.use(routes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`Listening to port http://localhost:${port}`);
});