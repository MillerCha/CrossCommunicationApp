import { useEffect } from 'react'
import './App.css'
import { receiveDataAndSendToServerSecurely } from './Services/OpenSiteService';

function App() {

  useEffect(() => {
    receiveDataAndSendToServerSecurely();
  }, []);

  return (
    <>
      <h1>טפסים</h1>
     
    </>
  )
}

export default App
