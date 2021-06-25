import { createSlice } from '@reduxjs/toolkit'
import { login } from './actions'

type LoginState = {
  requesting: boolean
  success: boolean
  error: Error | null
}

const initialState = {
  requesting: false,
  success: false,
  error: null,
} as LoginState

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.success = false
      state.requesting = true
      state.error = null
    },
    [login.fulfilled.type]: (state) => {
      state.success = true
      state.requesting = false
      state.error = null
    },
    [login.rejected.type]: (state, action) => {
      state.success = false
      state.requesting = false
      state.error = action.payload
    },
  },
})

export default loginSlice.reducer
