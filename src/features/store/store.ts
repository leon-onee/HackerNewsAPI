import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice.js'
import filterReducer from '../slices/filterSlice'
import refreshReducer from '../slices/refreshSlice'

export const store = configureStore({
	reducer: {
		refresh: refreshReducer,
		filter: filterReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
