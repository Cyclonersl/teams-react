import { socketMiddleware } from './middlewares/socketio';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import equipeReducer from './slices/equipes'
import prestadoraReducer from './slices/prestadora'
import localizacoesReducer from './slices/localizacoes'
import uiReducer from './slices/ui'

const rootReducer = combineReducers({
    equipes: equipeReducer,
    prestadoras: prestadoraReducer,
    localizacoes: localizacoesReducer,
    ui: uiReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(socketMiddleware)
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;