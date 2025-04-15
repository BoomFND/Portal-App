import { request } from './request'

export const getDownloadLink = () =>
  request({
    url: '/generic/user_download/',
    method: 'GET'
  })