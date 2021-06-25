import axios from 'axios'
import Config from 'react-native-config'
import { get } from 'lodash'
import store from '../../redux/store'
import { sessionExpired } from '../../redux/actions'

const apiInstance = axios.create({
  baseURL: Config.API_URL,
})

apiInstance.interceptors.request.use((config) => {
  const accessToken = get(store.getState(), 'auth.token')

  if (!config.headers?.Authorization && accessToken) {
    config.headers = {
      Authorization: `${accessToken}`,
    }
  }

  return config
})

apiInstance.interceptors.response.use(undefined, (err: any) => {
  const error = err.response
  if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
    store.dispatch(sessionExpired())
  }

  throw err
})

export default apiInstance
