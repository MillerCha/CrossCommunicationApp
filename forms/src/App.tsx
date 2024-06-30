import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      
      // Check if the message is from a trusted origin (http://localhost:5174 in this case)
      if (event.origin !== 'http://localhost:5174') return; // Ensure message is from ParentProject
      console.log('Message received in ChildProject:', event.data);
    };

    // Add an event listener to listen for messages from the parent window
    window.addEventListener('message', handleMessage);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

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
      <h1>טפסים</h1>
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
    </>
  )
}

export default App
