let express = require("express");
let cors = require('cors');
let MongoClient = require("mongodb").MongoClient;
let bodyParser = require("body-parser");
let sanitizer = require("express-sanitizer");
let objectId = require("mongodb").ObjectId;

// MongoDB constants
const URL = "mongodb://localhost:27017/";
const DB_NAME = "dbTechs";

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

// add body parser middleware to parse up any JSON coming in with request
app.use(bodyParser.json());
// add sanitizer to clean all JSON incoming data
app.use(sanitizer());

// construct MongoClient object for working with MongoDB
let mongoClient = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/get", async (request, response) => {
    // Use connect method to connect to the server
    try {
        await mongoClient.connect(); 
   	  // convert all documents in technologies collection into array in one awesome statement!
        let techArray = await mongoClient.db(DB_NAME).collection("technologies").find().sort("name",1).toArray();
        // close mongoClient (connection to MongoDB server)
        mongoClient.close();
        let json = { "technologies": techArray };
 
        response.status(200);
        // serializes sampleJSON to string format
        response.send(json);
    } catch (error) {
        console.log(`>>> ERROR : ${error}`);
        response.status(500);
        response.send({error: `Server error with get : ${error}`});
        throw error;
    }
});


app.listen(8080, () => console.log("Listening on port 8080"));