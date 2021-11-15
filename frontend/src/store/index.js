import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import apiNewsReducer from './apiNewsReducer';
import chatReducer from './chatReducer';
import errorReducer from './errorReducer';
import loaderSpinnerReducer from './loaderSpinnerReducer';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    apiNewsReducer,
    chatReducer,
    errorReducer,
    loaderSpinnerReducer,
    messageReducer,
    profileReducer,
    userReducer
});

const persistConfig = {key: 'root', storage: storage, blacklist: ['apiNewsReducer', 'chatReducer', 'errorReducer', 'loaderSpinnerReducer', 'messageReducer', 'profileReducer', 'userReducer']};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
