import { createSlice } from '@reduxjs/toolkit'
import { login } from '../features/login/ducks/actions'

type AuthState = {
  token: string | null
}

const initialState: AuthState = {
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token
    })
  },
})

export default authSlice.reducer
