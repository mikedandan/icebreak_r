import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const rootReducer = combineReducers({
  user: {},
})
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export { store }
