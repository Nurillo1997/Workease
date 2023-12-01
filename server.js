//mongodb stringi securitysi uchun
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

/**is used to disable strict mode for querying in Mongoose, 
 * which is an Object Data Modeling (ODM) library for MongoDB and Node.js. */
mongoose.set('strictQuery', false);

// MongoDB connect

const connectionString = process.env.MONGO_URL; //process.env dotenv ni objecti
mongoose.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, goose) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection success");
            const server = require("./app");
            let PORT = process.env.PORT || 3000;
            server.listen(PORT, function () {
                console.log(`The server is running successfuly on port ${PORT}, http://localhost:${PORT}`);
            });
        }
    }
)
