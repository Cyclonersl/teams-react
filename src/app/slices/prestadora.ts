import { PrestadoraModel } from './../../model/Prestadora';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import PrestadoraDataService from '../services/PrestadoraDataService';

interface statePros {
    chaves: number[],
    dados: { [key: string]: PrestadoraModel },
    carregando?: boolean,
    error?: string
}

const initialState: statePros = { chaves: [], dados: {} };


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

            const chaves = payload.reduce((arr: number[], prestadora) => {
                arr.push(prestadora.id)
                return arr;
            }, [])

            state.carregando = false;
            state.chaves = chaves;
            state.dados = map;
        })
    },
    reducers: {

    }
})


prestadoraSlice.actions

export default prestadoraSlice.reducer;