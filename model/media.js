const mongoose= require("mongoose");
const MediaSchema= new mongoose.Schema({

    name:{
        type: String,
        required:true,
    },
    topicIdMedia:{
        type: String,
        required:true,
    },
    fieldIdMedia:{
        type: String,
        required:true,
    },
    topicNameMedia:
    {
        type: String,
        required:true,
    },
    fieldNameMedia:
    {
        type: String,
        required:true,
    },
    videos:  [{type:String}],
},
{
    timestamps:true,
}
    
);

module.exports = Media = mongoose.model ("Media", MediaSchema);