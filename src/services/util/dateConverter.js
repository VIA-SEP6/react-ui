const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const formatDate = (date) => {
    if (date) {
        return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
    }
    return ""
}