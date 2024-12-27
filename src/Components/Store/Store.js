
import { configureStore } from '@reduxjs/toolkit';
import OrderRedux from '../../Redux/Order';
import AuthRedux from '../../Redux/Authentication'
import CheckoutRedux from "../../Redux/Checkout"
import LikeRedux from'../../Redux/LikeOrder'
import storage from 'redux-persist/lib/storage'; // localStorage as default storage
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['Auth'], // Persist only the Auth slice
};

const rootReducer = combineReducers({
    order:  OrderRedux,
    Auth: AuthRedux,
    checkout:CheckoutRedux ,
    like:LikeRedux,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
