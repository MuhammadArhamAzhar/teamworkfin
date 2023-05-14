const mongoose= require("mongoose");
const MediaSchema= new mongoose.Schema({

    name:{
        type: String,
        required:true,
    },
    topicid:{
        type: String,
        required:true,
    },
    fieldid:{
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