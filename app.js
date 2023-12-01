console.log("Web Serverni boshlash");
const http = require("http");
const express = require("express");
const app = express();


let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "sesions",
});

//1: kirish code
//Express middleware
app.use(express.static("public")); 
app.use(express.json()); 
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.urlencoded({ extended: true })); 


//3:View code
app.set("views", "views");
app.set("view engine", "ejs");

//4:Routing code
// app.use("/resto", router_bssr); // CLASSIC API
// app.use("/", router); //REST API with react



module.exports = app;

