/* eslint-disable react/prop-types */
import { useState } from "react";

const Uploader = ({ sendFileUp }) => {
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileInputs = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setFile(file);
    sendFileUp();
  };

  //modal variables
  let modalStyle = { display: "block" };

  return (
    <div className="upload">
      <div className="inputs">
        <h2>you should upload your picture here</h2>
        <input type="file" onChange={handleFileInputs} className="file-input" />
        <button onClick={() => setFile(null)}>remove file</button>
      </div>

      {file ? (
        <img
          src={file}
          alt="your picture must be here"
          className="prev-img"
          onClick={() => setShowModal(true)}
        />
      ) : null}

      <div id="myModal" className="modal" style={showModal ? modalStyle : null}>
        <span className="close-btn" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <img className="modal-content" id="img01" src={file} />
      </div>
    </div>
  );
};

export default Uploader;
