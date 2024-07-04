import { useRef } from 'react'
import './App.css'
import { openIframeSecondSiteWithDataSecurely, openSecondSiteWithDataSecurely } from './Services/OpenSiteService';

function App() {
  const iRef = useRef<HTMLIFrameElement | null>(null);



  const openFormsNewWindows = () => {
    openSecondSiteWithDataSecurely('1', 'http://localhost:5174', '');
  }

  const openFormsIframe = () => {
    openIframeSecondSiteWithDataSecurely('1',
      'http://localhost:5174',
      '',
      iRef.current);
  }

  return (
    <>
      <h1>פורטל</h1>
 

      <div className="card">

        <button onClick={() => openFormsNewWindows()}>
          כניסה למערכת טפסים
          שימוש בסרביס
          חלון חדש
        </button>


        <button onClick={() => openFormsIframe()}>
          כניסה למערכת טפסים
          שימוש בסרביס
          iframe
        </button>
      </div>

      <iframe ref={iRef}
        //src="http://localhost:5174"
        title="forms" ></iframe>



    </>
  )
}

export default App
