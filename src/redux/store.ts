import { baseApi } from "./api/baseApi/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice";
import registerReducer from "./features/RegisterSlice";
import userReducer from "./features/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistUserConfig = {
    key: "user",
    storage,
  };
  const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
  
  export const store = configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
    
      login: loginReducer,
      register: registerReducer,
      user: persistedUserReducer,
      
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        baseApi.middleware
      ),
  });
  
  export type RootState = ReturnType<typeof store.getState>; // Infers the state structure
  export type AppDispatch = typeof store.dispatch; // Type for dispatch
  export type AppStore = typeof store; // Type for the store
  
  // Persistor to manage rehydration of state
  export const persistor = persistStore(store);