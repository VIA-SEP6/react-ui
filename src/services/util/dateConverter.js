const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function prependZeroIfNeeded(number) {
    if (number.toString().length === 1) {
        number = `0${number}`
    }
    return number;
}

export const formatTime = (date) => {
    let hours = prependZeroIfNeeded(date.getHours())
    let minutes = prependZeroIfNeeded(date.getMinutes());
    return `${hours}:${minutes}`
}

export const formatDate = (date) => {
    if (date) {
        return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    }
    return ""
}

export const formatDateTime = (date) => {
    if (date) {
        return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} ${formatTime(date)}`
    }
    return ""
}