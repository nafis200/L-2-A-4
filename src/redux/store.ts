import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import  cartReducer  from './features/cars/carSlice';
import { baseApi } from './api/baseApi';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
};

const userPersistConfig = {
  key: 'cart',
  storage,
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedUserReducer = persistReducer(userPersistConfig,cartReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    cart: persistedUserReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
