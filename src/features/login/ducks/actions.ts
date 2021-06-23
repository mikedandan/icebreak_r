import * as ActionTypes from './action-types'

export const loginRequest = (email: string, password: string) => ({
  type: ActionTypes.LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
  showLoading: true,
})

export const loginSuccess = (result: any) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: {
    result,
  },
  showLoading: false,
})

export const loginFailure = (error: string) => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload: {
    error,
  },
  showLoading: false,
})
