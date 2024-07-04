

//webSite2
export function receiveDataAndSendToServerSecurely(): void {

  function getMessage(event: any): void {
    console.log('Message');
    // Verify message origin for security
    if (event.origin === 'http://localhost:5174' ||
      event.origin === 'http://localhost:5173'
    ) {
      //check the data in server
      const newData = 'new' + event.data;
      console.log('Message received in ChildProject:', event.data);
      localStorage.setItem('data', newData);

    }


   // window?.removeEventListener('message', getMessage);

  }

  // Listen for secure messages from the parent window
  window.addEventListener('message', getMessage);

}


//webSite2
export async function sendDataToServerSecurely(data: any): Promise<void> {
  try {
    // Send data securely to the server
    // You can use an HTTP request here to send the data securely
    console.log('Data sent securely to server:', data);
  } catch (error) {
    console.error('Error sending data to server:', error);
    throw error;
  }
}