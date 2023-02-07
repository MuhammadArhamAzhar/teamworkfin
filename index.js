const express = require ("express");
const cors= require ('cors');
const mongoose = require ("mongoose");

const path= require("path")
const app = express ();
//const server=require('http').Server(app)
//const io = require ('socket.io')(server)

// dynamic urls for room meetings
////////////////////////////////////////////////////////////////////////////////////
//const bodyParser=require('body-parser');
//const webrtc =require("wrtc");


//let senderStream;

//app.use(express.static('public'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));


//app.post('/consumer',async ({body},res) =>
//{
 //   const peer=new webrtc.RTCPeerConnection({
 //           iceServers: [
   //             {
       //             urls:"stun:stun.stunprotocol.org"
     //           }
         //   ]
        //});
        //peer.ontrack=(e)=>handleTrackEvent(e,peer);
        //const desc =new webrtc.RTCSessionDescription(body.sdp);
        //await peer.setRemoteDescription(desc);
        //senderStream.getTracks().forEach(track => peer.addTrack(track,senderStream));
        //const answer = await peer.createAnswer();
        //await peer.setLocalDescription(answer);
        //const payload={
        
          //  sdp:peer.localDescription
  // }
//res.json(payload);


//});

//function handleTrackEvent(e,peer)
//{
    //senderStream=e.stream[0];
//}























//////////////////////////////////////////////////////////////////////////////////


app.use(cors());
const mediaRoutes = require ('./routes/media');
const { UUID } = require("bson");
app.use("/api/v1/media",mediaRoutes);
app.use('/public',express.static(path.join(__dirname,'public')))
const mongodbUri = "mongodb://localhost:27017/uploadproject";

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