import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authSlice } from './slice/AuthSlice'
import { userSlice } from './slice/UserSlice'
import { categorySlice } from './slice/CategorySlice'
import { newsSlice } from './slice/NewsSlice'

const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [categorySlice.reducerPath]: categorySlice.reducer,
    [newsSlice.reducerPath]: newsSlice.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authSlice.middleware,
      userSlice.middleware,
      categorySlice.middleware,
      newsSlice.middleware,

    ),

})

setupListeners(store.dispatch)

export default store