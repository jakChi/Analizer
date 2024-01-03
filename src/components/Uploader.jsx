/* eslint-disable react/prop-types */
import { useState } from "react";

const Uploader = ({ sendFileUp }) => {
  const [file, setFile] = useState(null);

  const handleFileInputs = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setFile(file);
    sendFileUp();
  };

  return (
    <div className="upload">
      <div className="inputs">
        <h2>you should upload your picture here</h2>
        <input type="file" onChange={handleFileInputs} className="file-input" />
        <button onClick={() => setFile(null)}>remove file</button>
      </div>
      {file ? <img src={file} alt="your picture must be here" className="prev-img"></img> : null}
    </div>
  );
};

export default Uploader;
