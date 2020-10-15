const express = require('express');
var cors = require('cors')
const routes = require('./routes/items');
const port = 3000;

const app = express();

app.use(cors());
app.use('/', routes);

app.listen(port, () => console.log(`App listening on port ${port}!`))