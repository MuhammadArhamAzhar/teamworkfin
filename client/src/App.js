import logo from './logo.svg';
import './App.css';
import UploadForm from './components/uploadForm';

import UploadList from './components/Uploadlists';
import axios from 'axios';
import { BACKEND_URI } from './config/constant';
import React,{ useState,useEffect } from 'react';

const App=()=> {

  const [medias, setMedias] = useState([])
  useEffect(()=>{
getAllMedias();
  },[])
  const getAllMedias=() =>
  {
axios.get(`${BACKEND_URI}/api/v1/media/all`).then(result => {
setMedias(result.data)
}).catch(error =>
  {
setMedias([]);
 console.log(error)
 alert("error yaara");
  });
  }
  return (
    <>

    <div className="row">
      <div className="col-md-6"> 
      <div className="card" style={{
        height:'auto',
        width: "800px",
        margin: "40px",
          border: "1px solid black",
      }}
      >
        <div className="card-body"><UploadForm getAllMedias={getAllMedias}/></div>
        </div>
        </div>
      <div className="col-md-6"><div className="card" style={{
        height:'auto',
        width: "500px",
        margin: "300px",
        padding: "1px",
        align:'left',
          border: "2px solid black",
      }}>
          <div className="card-body"><UploadList medias={medias}/></div>
        </div> </div>

        
          <div><h1>Arham Azhar</h1></div>
        
    </div>
    </>
  );
}

export default App;
