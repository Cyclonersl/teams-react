import { LocalizacaoEquipeMessage } from './../../model/LocalizacaoEquipeMessage';
import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";


export const localizacaoAdapter = createEntityAdapter<LocalizacaoEquipeMessage>({
    selectId: (localizacao) => localizacao.equipe_id,
})

const localizacaoSlice = createSlice({
    name: 'localizacoes',
    initialState: localizacaoAdapter.getInitialState,
    reducers: {
        localizacaoUpdate: (state, action: PayloadAction<LocalizacaoEquipeMessage>) => {
            localizacaoAdapter.upsertOne(state, action.payload)
        }
    },
})

export default localizacaoSlice.reducer
export const { localizacaoUpdate } = localizacaoSlice.actions