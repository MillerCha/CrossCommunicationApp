

//webSite1
export function openSecondSiteWithDataSecurely(serverName: string,
  secondSiteUrl: string,
  rout: string): void {

  let data = serverName == "1" ? "one" : "ten";
  let newTab: Window | null;

  //else

    newTab = window.open(secondSiteUrl, '_blank');
    newTab?.addEventListener('load', () => {

      // Send secure message to the second site iframe after it is fully loaded

      newTab?.postMessage('loadData - ' + data, secondSiteUrl);

    });


  // setTimeout(() => {  
  //   // Send secure message to the second site iframe
  // iframe?.contentWindow?.postMessage(data, secondSiteUrl);
  // // Send secure message to the second site window
  // secondSiteWindow?.postMessage('setTimeout' + data, secondSiteUrl);

  // console.log('הודעה נשלחה');
  //  }, 100);


}




//webSite1
export function openIframeSecondSiteWithDataSecurely(serverName: string,
  secondSiteUrl: string,
  rout: string,
  iframe: HTMLIFrameElement | null): void {

  let data = serverName == "1" ? "one" : "ten";

  if(iframe != null ){ //iframe = document.createElement('iframe');
    iframe.src = secondSiteUrl + rout;
    //iframe.style.display = 'none'; // Make the iframe hidden

    // Append the iframe to the document body
    //container = document.getElementById(containerId);
    //if (container)
    //container.appendChild(iframe);
    function sendMessageAfterload(): void {
      console.log('send message');
      iframe?.contentWindow?.postMessage('loadData - ' + data, secondSiteUrl);
      iframe?.removeEventListener('load', sendMessageAfterload);

    }
    // Send secure message to the second site iframe after it is fully loaded

    iframe.addEventListener('load', sendMessageAfterload);
  }
   
  //get data from server


  // setTimeout(() => {  
  //   // Send secure message to the second site iframe
  // iframe?.contentWindow?.postMessage(data, secondSiteUrl);
  // // Send secure message to the second site window
  // secondSiteWindow?.postMessage('setTimeout' + data, secondSiteUrl);

  // console.log('הודעה נשלחה');
  //  }, 100);


}


