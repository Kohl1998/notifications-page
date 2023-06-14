// Access to span count
const NotificationNumber = document.getElementById('NotificationNumber')
const btn = document.getElementById('markMessage').addEventListener('click', 
updateNotificationCount)
const Mark = document.getElementById('Mark')
const Angela = document.getElementById('Angela')
const Jacob = document.getElementById('Jacob')

// Resets page after 5 seconds
setTimeout(resetApp, 5000)

function updateNotificationCount () {
    // Sets counter back to zero
    NotificationNumber.textContent = 0

    // Resets background color to white once button is clicked
    Mark.style.cssText = 'background-color: #fafafa;'
    Angela.style.cssText = 'background-color: #fafafa;'
    Jacob.style.cssText = 'background-color: #fafafa;' 
}

function resetApp () {
Mark.style.cssText = 'background-color: #E5E4E2;'
Angela.style.cssText = 'background-color: #E5E4E2;'
Jacob.style.cssText = 'background-color: #E5E4E2;' 

// Sets counter back to three
NotificationNumber.textContent = 3
}

