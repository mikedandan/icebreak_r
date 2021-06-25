import apiInstance from './base'

export const login = async (email: string, password: string) => {
  return await apiInstance.post('user/login', {
    email,
    password,
  })
}
