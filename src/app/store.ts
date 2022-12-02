import { configureStore } from '@reduxjs/toolkit';
import equipeReducer from './slices/equipes'
import prestadoraReducer from './slices/prestadora'
import localizacoesReducer from './slices/localizacoes'

const store = configureStore({
    reducer: {
        equipes: equipeReducer,
        prestadoras: prestadoraReducer,
        localizacoes: localizacoesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;