import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authSlice } from './slice/AuthSlice'
import { userSlice } from './slice/UserSlice'

const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authSlice.middleware,
      userSlice.middleware
    ),

})

setupListeners(store.dispatch)

export default store