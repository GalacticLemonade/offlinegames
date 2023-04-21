const information = document.getElementById('info')
information.innerText = `Offline games is using Electron (v${versions.electron()})`

const updateOnlineStatus = () => {
  document.getElementById('status').innerHTML = navigator.onLine ? 'Internet: connected' : 'Internet: offline'
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()