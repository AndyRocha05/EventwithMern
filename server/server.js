require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-Parser');
const app = express();
const cookieParser = require('cookie-parser');
port = process.env.PORT;
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config");

require("./routes/auth.routes")(app);
// require("./routes/routes")(app);
 
 app.listen(8000, () =>{ console.log("Welcome To The New World @ 8000")
})