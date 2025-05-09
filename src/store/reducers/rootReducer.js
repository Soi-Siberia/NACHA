import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from "./appReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const adminPersistConfig = {
    ...persistCommonConfig,
    key: 'admin',
    whitelist: ['isLoggedIn', 'accessToken']
};

let createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    admin: persistReducer(adminPersistConfig, adminReducer),
    user: userReducer,
    app: appReducer,
    category: categoryReducer,
    product: productReducer,
})

export default createRootReducer;