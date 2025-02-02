
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './features/counter/counterSlice'
import { taskReducer } from './features/task/taskSlice'


export const store = configureStore({
  reducer: {
    counter1: counterReducer,
    todo: taskReducer
  },
})

// for state
export type RootState = ReturnType<typeof store.getState>

// for dispatch
export type AppDispatch = typeof store.dispatch