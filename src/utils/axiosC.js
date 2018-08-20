import axios from 'axios'
import {notification} from 'antd'
import Global from './global'
// notification
notification.config({
    top: 57,
    duration: null,
})

let axiosC = axios.create({
    timeout: 30000,
})

// handle global request
axiosC.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
})

axiosC.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data
    } else {
        // 报错, 抛出异常
        throw new Error(response.data.message)
    }
}, function (error) {
    if (!Global.notificationIsShow) {
        Global.notificationClose(Global, () => {
            notification.close('notification')
        })
        notification.error({
            message: '服务异常',
            description: error.toString() === 'Error: timeout of 30000ms exceeded' ? '请求超时' : error.toString(),
            key: 'notification',
        })
    }
    return Promise.reject(error)
})

export default axiosC