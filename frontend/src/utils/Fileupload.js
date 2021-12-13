import React, { useState } from 'react';
import axios from 'axios';
import upload from '../assets/upload.png';
import { useMediaQuery } from 'react-responsive';

function Fileupload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const isWep = useMediaQuery({
    query: '(min-width : 768px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width :0px) and (max-width :767px)',
  });

  // formData라는 instance에 담아 보냄
  const handleFileUpload = (e) => {
    // const aValue = sessionStorage.getItem('username');
    // console.log(aValue);const formData = new FormData();
    const formData = new FormData();
    formData.append('userfile', selectedFile, selectedFile.name);

    axios
      .post('http://52.79.242.208:3194/uploadfile', formData)
      .then((res) => {
        console.log(res);
        if (res.data === 'success') {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        alert('적합한 형태의 데이터가 아닙니다.');
      });
  };

  return (
    <>
      <div className="justify-end flex flex-wrap pr-7 ">
        <input
          className="w-28 h-5 md:w-44 lg:h-7"
          type="file"
          onChange={handleFileChange}
        />

        {isWep && (
          <button>
            <img
              className="h-7"
              src={upload}
              onClick={handleFileUpload}
              alt=""
            />
          </button>
        )}

        {isMobile && (
          <button>
            <img
              className="h-5"
              src={upload}
              onClick={handleFileUpload}
              alt=""
            />
          </button>
        )}
      </div>
    </>
  );
}

export default Fileupload;
