export default {
    notificationIsShow: false,
    notificationClose: (currThis, callback) => {
        currThis.notificationIsShow = true
        setTimeout(() => {
            callback()
            currThis.notificationIsShow = false
        }, 3000)
    },
}