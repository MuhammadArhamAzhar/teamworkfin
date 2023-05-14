import React ,{useState} from 'react';
import axios from 'axios';
import { BACKEND_URI } from '../config/constant';
const UploadForm= ({getAllMedias})=>
{
    // videos are uploaded via form data not json
    const [name, setName] = useState("");
    const [topicid, settopicid] = useState("");
    const [fieldid, setfieldid] = useState("");
    const [videos, setVideos] = useState([]);

    const handleSubmit = (e) => {

        e.preventDefault(); // empty form and page refresh elimainte 
        let formdata = new FormData();
        for (let key in videos)
        {
            formdata.append ("videos", videos [key]);
        } // [key,value] 
        formdata.append ( "fieldid" , fieldid);
        formdata.append ( "topicid" , topicid);
        formdata.append ( "name" , name);
        localStorage.setItem("topicid",topicid)
    localStorage.setItem("fieldid", fieldid)
        axios.post(`${BACKEND_URI}/api/v1/media/create`,formdata).then(success => {
            getAllMedias(); 
            alert('Submitted Sucessfully ! ')
           
        }).catch(error => {
            console.log (error);
            alert ("Error happened!");
        });
        // axios.post(`${BACKEND_URI}/api/v1/media/create?topicid=${topicid}&fieldid=${fieldid}`,formdata).then(success => {
        //     getAllMedias(); 
        //     alert('Submitted Sucessfully ! ')
        // }).catch(error => {
        //     console.log (error);
        //     alert ("Error happened!");
        // });
       
    };
const setFields = () =>
{
    console.log("click click", {topicid}, {fieldid})
   
}

return  (<><form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="name">Name</label>    
    <input type="text" name="name" id="name" className="form-control"  onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="form-group">
    <label htmlFor="name">Topic ID</label>    
    <input type="text" name="topicid" id="topicid" className="form-control"  onChange={(e)=>{settopicid(e.target.value)}}/>
    </div>
    <div className="form-group">
    <label htmlFor="name">Field ID</label>    
    <input type="text" name="fieldid" id="fieldid" className="form-control"  onChange={(e)=>setfieldid(e.target.value)}/>
    </div>
    <div className='form-group'>
    <label htmlFor="videos">Upload Video</label> 
    <input type='file' name='videos' id='videos' multiple className="form-control" accept=".mp4, .mkv" onChange={(e)=>
    {
        setVideos(e.target.files);
    }
    } />

    </div>
    <button type="submit" className="btn btn-primary mt-2">Submit</button>
    </form>
    <button onClick={setFields()}>set field</button>
    
    <div>hello jee</div>
    </>
);
};
export default UploadForm;