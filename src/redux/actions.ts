import { createAction } from '@reduxjs/toolkit'

export const sessionExpired = createAction('sessionExpired')

export const bootstrap = createAction('bootstrap')

export const setAuthToken = createAction<string>('setAuthToken')
