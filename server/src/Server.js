let express = require("express");
let cors = require('cors');
let bodyParser = require("body-parser");
let sanitizer = require("express-sanitizer");

// construct application object via express
let app = express();
// add cors as middleware
app.use(cors());
// express static middleware - setup static files location
app.use('/',express.static('./dist/portfolio'));
app.use('/home', express.static('./dist/portfolio/'));
app.use('/work', express.static('./dist/portfolio/'));
app.use('/about', express.static('./dist/portfolio/'));
app.use('/contact', express.static('./dist/portfolio/'));
app.use('/resume', express.static('./dist/portfolio/'));
app.use('/skills', express.static('./dist/portfolio/'));
app.use('/sudoku', express.static('./dist/portfolio/'));
app.use('/chess', express.static('./dist/portfolio/'));

// add body parser middleware to parse up any JSON coming in with request
app.use(bodyParser.json());
// add sanitizer to clean all JSON incoming data
app.use(sanitizer());


app.listen(8080, () => console.log("Listening on port 8080"));
