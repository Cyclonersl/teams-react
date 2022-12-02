import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { LocalizacaoEquipe } from "../../model/Equipe";


export const localizacaoAdapter = createEntityAdapter<LocalizacaoEquipe>({
    selectId: (localizacao) => localizacao.id,
})

const localizacaoSlice = createSlice({
    name: 'localizacoes',
    initialState: localizacaoAdapter.getInitialState,
    reducers: {
        localizacaoUpdate: localizacaoAdapter.upsertOne
    }
})

export default localizacaoSlice.reducer
export const { localizacaoUpdate } = localizacaoSlice.actions