const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const cookieParser = require("cookie-parser");

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const apiRouter = require('./routes/api');
const { pagesRouter } = require('./routes//pages');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
    cors, 
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    express.static(path.join(__dirname, 'public')),
    apiRouter,
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT https://localhost:${PORT}`);
});