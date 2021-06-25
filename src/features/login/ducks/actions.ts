import { createAsyncThunk } from '@reduxjs/toolkit'
import { userApi } from '../../api'

export type LoginParams = {
  email: string
  password: string
}

export const login = createAsyncThunk(
  'users/login',
  async (params: LoginParams, { rejectWithValue }) => {
    try {
      console.log('params:', params)
      const { email, password } = params
      const res = await userApi.login(email, password)
      console.log(res.data)
      return res.data
    } catch (error) {
      if (error.response.data) {
        return rejectWithValue(error.response.data)
      }
      return rejectWithValue(error)
    }
  },
)
