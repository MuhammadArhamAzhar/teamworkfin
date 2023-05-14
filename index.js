const express = require ("express");
const cors= require ('cors');
const mongoose = require ("mongoose");
const path= require("path")
const app = express ();

app.use(cors());
const mediaRoutes = require ('./routes/media');
const { UUID } = require("bson");


app.use("/api/v1/media",mediaRoutes);
app.use('/public',express.static(path.join(__dirname,'public')))
const mongodbUri = "mongodb+srv://zohaasadiq:namzoh2000@cluster0.seaypxs.mongodb.net/?retryWrites=true&w=majority";

mongoose. connect (mongodbUri, {
useNewUrlParser: true,
});
mongoose.connection.on ("connected", () => 
{
console. log ("Connected to mongodb");
});
mongoose.connection.on("error", (err) => {
console. log ("Error connecting to mongo", err);
});

app.listen (4000, () => {
console.log("App is running on PORT 4000"); 
});