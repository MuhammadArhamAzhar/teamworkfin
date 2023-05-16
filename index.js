const express = require ("express");
const cors= require ('cors');
const mongoose = require ("mongoose");
const path= require("path")
const fs = require('fs');
const Media = require('./model/media')
const app = express ();
const {deleteQuestionByField} = require("./deletequiz")
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
app.post('/deleteWebinar', async (req, res) => {
  console.log("working")
  const { field, value } = req.query;
  fieldname = field;
  valuefield = value;
  console.log({field}, {value})
  const video = await Media.findOne({ field: value});
  const filePath= video.videos[0];
 //deleteQuestionByField(field,value);
 

//const filePath = path.join(__dirname, 'public', 'upload', value);
const path = require('path');
const convertedPath = path.join(path.sep, ...filePath.split('/'));
 const filePathnew= path.join(__dirname,  convertedPath)
 console.log(filePathnew);
 
fs.unlink(filePathnew, (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully');
  }
});


 //console.log("delted")
});
app.listen (4000, () => {
console.log("App is running on PORT 4000"); 
});