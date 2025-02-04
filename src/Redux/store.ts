
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './features/counter/counterSlice'
import { taskReducer } from './features/task/taskSlice'
import { userReducer } from './features/user/user'
import { baseApi } from './api/baseApi'


export const store = configureStore({
  reducer: {
    counter1: counterReducer,
    todo: taskReducer,
    allUser: userReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware)
})

// for state
export type RootState = ReturnType<typeof store.getState>

// for dispatch
export type AppDispatch = typeof store.dispatch