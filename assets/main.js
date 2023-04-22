const statusElement = document.getElementById('connectionstatus');

// Define a function to check internet connection
function checkConnection() {
  const online = navigator.onLine;
  if (online) {
    statusElement.innerHTML = 'Connected';
  } else {
    statusElement.innerHTML = 'Not Connected';
  }
}

setInterval(checkConnection, 1000);