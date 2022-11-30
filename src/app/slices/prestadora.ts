import { PrestadoraModel } from './../../model/Prestadora';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import PrestadoraDataService from '../services/PrestadoraDataService';

interface statePros {
    ids: number[],
    lista: { [key: string]: PrestadoraModel },
    carregando: boolean,
    error?: string
}

const initialState: statePros = { ids: [], lista: {}, carregando: true };


export const carregarPrestadoras = createAsyncThunk("prestadoras/carregar", async () => {
    const response = await PrestadoraDataService.carregar();
    return (response.data) as PrestadoraModel[]
})

const prestadoraSlice = createSlice({
    name: 'prestadoras',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(carregarPrestadoras.pending, (state, action) => {
            state.carregando = true
        })

        builder.addCase(carregarPrestadoras.fulfilled, (state, { payload }) => {
            const map = payload.reduce((map: { [key: string]: PrestadoraModel }, prestadora) => {
                map[prestadora.id] = prestadora;
                return map;
            }, {})

            const ids = payload.reduce((arr: number[], prestadora) => {
                arr.push(prestadora.id)
                return arr;
            }, [])

            state.carregando = false;
            state.ids = ids;
            state.lista = map;
        })
    },
    reducers: {

    }
})


prestadoraSlice.actions

export default prestadoraSlice.reducer;