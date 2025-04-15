import axios, { AxiosError, type AxiosRequestConfig } from 'axios'

// baseURL
const apiOrigin = 'https://api.gamerboom.org'

/**
 * @param options options
 * @returns
 */
export function request(
  options: AxiosRequestConfig,
) {
  return new Promise((resolve, reject) => {

    // create an axios instance
    const request = axios.create({
      baseURL: apiOrigin,
      withCredentials: false,
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
        'Content-Language': 'en-US',
        'accept-language': 'en-US',
      },
    })


    request.interceptors.request.use(async (config) => {
      return config
    })

    request.interceptors.response.use(
      (res: any) => {
        return res.data
      },
      async (err: AxiosError) => {
        if (err.response?.status === 401) {
        }

        let errMsg

        const { ERR_NETWORK, ERR_CANCELED, ECONNABORTED } = AxiosError
        if ([ERR_NETWORK, ERR_CANCELED, ECONNABORTED].includes(err.code as string)) {
          errMsg = err.message
        } else {
          errMsg = (err.response?.data as any)?.detail
        }
        return Promise.reject(err)
      },
    )

    return request(options).then(
      (res) => {
        resolve(res)
      },
      (error) => {
        if (error.response) {
          reject(error.response.data)
        } else {
          reject(error)
        }
      },
    )
  })
}
