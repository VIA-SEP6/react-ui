import {firebaseOnCall} from "../firebase";

const clearAllNotifications = () => {
    return firebaseOnCall('notifications-markAllAsRead')
}

const clearNotification = (notificationId) => {
    return firebaseOnCall('notifications-markAsRead', {notificationId})
}


const notificationApiService = {
    clearAllNotifications,
    clearNotification
}

export default notificationApiService