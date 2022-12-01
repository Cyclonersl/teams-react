import { PrestadoraModel } from './../../model/Prestadora';
import { createSlice, createAsyncThunk, createEntityAdapter, EntityState } from '@reduxjs/toolkit'
import PrestadoraDataService from '../services/PrestadoraDataService';

interface statePros extends EntityState<PrestadoraModel> {
    carregando: boolean,
    error?: string
}

//AsyncThunk
export const carregarPrestadoras = createAsyncThunk("prestadoras/carregar", async () => {
    const response = await PrestadoraDataService.carregar();
    return (response.data) as PrestadoraModel[]
})

//EntityAdapter
export const prestadoraAdapter = createEntityAdapter<PrestadoraModel>({
    selectId: (prestadora) => prestadora.id,
})

//InitialState
const initialState: statePros = { ...prestadoraAdapter.getInitialState(), carregando: true };

const prestadoraSlice = createSlice({
    name: 'prestadoras',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(carregarPrestadoras.pending, (state, action) => {
            state.carregando = true
        })

        builder.addCase(carregarPrestadoras.fulfilled, (state, { payload }) => {
            prestadoraAdapter.addMany(state, payload);
            state.carregando = false;
        })
    },
    reducers: {

    }
})

export default prestadoraSlice.reducer;

//Selectors