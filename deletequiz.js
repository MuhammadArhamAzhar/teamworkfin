const express = require('express');
const Media = require('./model/media')
const app = express();
app.use(express.json());


async function deleteQuestionByField(field, value) {
   console.log("Delete quiz Database connected!")
      const result = await Media.deleteMany({ [field]: value });
      console.log(`Deleted ${result.deletedCount} document(s).`);
     
      return result;
   
  }
  
  module.exports = { deleteQuestionByField };
