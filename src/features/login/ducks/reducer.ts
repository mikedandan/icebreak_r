import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  requesting: false,
  success: false,
  error: null,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest: {
      reducer: (state, action) => {},
      prepare: (email: string, password: string) => {
        return {
          payload: { email, password },
          meta: {
            showLoading: true,
          },
          error: null,
        }
      },
    },
  },
})
