const APIMOCK = '/api/v1'
const APIV1 = 'http://192.168.1.101:12900' // 101本地
// const APIV1 = 'http://127.0.0.1:12900' // psyhub.cn
const APIV1SERVICE = 'http://192.168.1.101:6789'


module.exports = {
  name: 'PsyHub',
  prefix: 'psyHub',
  footerText: 'PsyHub Admin  © 2018 renjy',
  logo: '/public/logo.ico',
  iconFontCSS: '/public/iconfont.css',
  iconFontJS: '/public/iconfont.js',
  CORS: [APIV1SERVICE],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1Type: 'api',
  APIV1SERVICEType: 'cpi',
  APIV1,
  APIV1SERVICE,
  api: {
    userLogin: `${APIMOCK}/cpi/userlogin`,
    userLogout: `${APIMOCK}/cpi/userLogout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1SERVICE}/gp_find_u`,
    posts: `${APIV1}/posts`,
    user: `${APIMOCK}/user/:id`,
    dashboard: `${APIMOCK}/dashboard`,
    menus: `${APIMOCK}/menus`,
    weather: `${APIMOCK}/weather`,
    v1test: `${APIMOCK}/test`,
  },
}
