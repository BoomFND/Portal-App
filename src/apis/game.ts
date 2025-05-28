import { request } from './request'

export const getDownloadLink = () =>
  request({
    url: '/generic/user_download/',
    method: 'GET'
  })
  export const getClient= () =>
    request({
      url: '/generic/client/',
      method: 'GET'
    })
  
  