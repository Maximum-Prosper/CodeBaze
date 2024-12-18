// DOM Elements
const notifNum = document.getElementById("notif-Num");
const markAsRead = document.getElementById("markAsRead");
const notifications = document.querySelectorAll(".notifications");
const unreadMsgIcons = document.querySelectorAll(".unreadMsgIcon");
const readMsgIcons = document.querySelectorAll(".readMessageIcon");

// Initial Count of Unread Notifications
let unreadCount = notifications.length;

// Function to Update Notification Count
function updateNotifCount() {
  notifNum.textContent = unreadCount > 0 ? unreadCount : 0; // Display number or empty if 0
}

// Function to Mark a Notification as Read
function markAsReadHandler(notification, unreadIcon, readIcon) {
  if (notification.classList.contains("unread")) {
    // Update styles and icons
    notification.classList.remove("unread");
    notification.classList.add("read");
    unreadIcon.style.display = "none";  // Hide unread icon
    readIcon.style.display = "block";   // Show read icon
    readIcon.title = "Mark as unread"

    // Decrease unread count and update
    unreadCount--;
    updateNotifCount();
  }
}

// Function to Mark a Notification as Unread
function markAsUnreadHandler(notification, unreadIcon, readIcon) {
  if (notification.classList.contains("read")) {
    // Update styles and icons
    notification.classList.remove("read");
    notification.classList.add("unread");
    readIcon.style.display = "none";   // Hide read icon
    unreadIcon.style.display = "block"; // Show unread icon

    // Increase unread count and update
    unreadCount++;
    updateNotifCount();
  }
}

// Event Listeners for Individual Notifications
notifications.forEach((notification, index) => {
  const unreadIcon = unreadMsgIcons[index];
  const readIcon = readMsgIcons[index];

  // Mark as Read on Unread Icon Click
  unreadIcon.addEventListener("click", () => {
    markAsReadHandler(notification, unreadIcon, readIcon);
  });

  // Mark as Unread on Read Icon Click
  readIcon.addEventListener("click", () => {
    markAsUnreadHandler(notification, unreadIcon, readIcon);
  });
});

// Mark All Notifications as Read
markAsRead.addEventListener("click", () => {
  notifications.forEach((notification, index) => {
    const unreadIcon = unreadMsgIcons[index];
    const readIcon = readMsgIcons[index];

    // Mark as Read if it is unread
    if (notification.classList.contains("unread")) {
      markAsReadHandler(notification, unreadIcon, readIcon);
    }
  });
});

// Initialize Notification Count
updateNotifCount();
