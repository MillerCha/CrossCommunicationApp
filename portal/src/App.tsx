import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  function openForms(): void {
    setShow(true);
    sendMessageToChild();
  }

    const sendMessageToChild = () => {
      
      const childIframe = document.getElementById('childIframe') as HTMLIFrameElement;

      // Send a message to the child iframe window with target origin 'http://localhost:5173'
      // if target origion = '*' -> can send message to any origion
      childIframe.contentWindow?.postMessage('Hello from ParentProject!', 'http://localhost:5173');
    };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>פורטל</h1>
      <div className="card">

        <button onClick={() => openForms()}>
          כניסה למערכת טפסים
        </button>

        <button onClick={() => sendMessageToChild()}>
          שליחת הודעה לטפסים
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {
        show && <iframe id="childIframe" 
          src="http://localhost:5173"
          title="forms" ></iframe>
      }


    </>
  )
}

export default App
