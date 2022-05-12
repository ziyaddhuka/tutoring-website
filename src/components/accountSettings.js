import React, {useState} from 'react'

//For Image Save
import axios from 'axios';
//For Image Upload
import ImageUploading from "react-images-uploading";

function AccountSettings() {
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  

  return (
  <div>
    <div class="text-center">
        <button className = "btn btn-warning btn-lg mx-4 my-4">Account settings</button>
    </div>

    <div>
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
  
        </div>

  </div>




  );
}

export default AccountSettings;