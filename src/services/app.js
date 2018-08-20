import { request, config } from 'utils'

const { api, APIV1SERVICEType } = config
const { user, userLogout, userLogin } = api

export function login (params) {
  return request({
    url: userLogin,
    method: 'post',
    type: APIV1SERVICEType,
    data: params,
  })
}

export function logout (params) {
  return request({
    url: userLogout,
    method: 'get',
    data: params,
  })
}

export function query (params) {
  return request({
    url: user.replace('/:id', ''),
    method: 'get',
    data: params,
  })
}
