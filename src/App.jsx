import './App.css'
import Uploader from './components/uploader';
import Results from './components/Results';
import { useState } from 'react';

function App() {

  const [fileUploaded, setFileUploaded] = useState(false);

  return (
    <>
      <Uploader sendFileUp={() => setFileUploaded(true)} />
      <Results picUploaded={fileUploaded} />
    </>
  );
}

export default App
