import { EquipeModel } from './../../model/Equipe';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import EquipeDataService from '../services/EquipeDataService';
import { ServicoModel } from '../../model/Servico';
import { ServicoProgramadoModel } from '../../model/ServicoProgramado';

interface statePros {
    chaves: number[],
    dados: { [key: string]: EquipeModel },
    carregando?: boolean,
    error?: string
}

const initialState: statePros = { chaves: [], dados: {} };


export const carregarEquipes = createAsyncThunk("equipes/carregar", async (prestadoraId: number) => {
    const response = await EquipeDataService.carregarEquipesPrestadora(prestadoraId);

    return (response.data) as EquipeModel[]
})

export const carregarServicos = createAsyncThunk("equipes/servicos", async (equipeId: number) => {
    const response = await EquipeDataService.carregarServicosEquipe(equipeId);
    return (response.data) as ServicoProgramadoModel[];
})

const equipesSlice = createSlice({
    name: 'equipes',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(carregarEquipes.pending, (state, action) => {
            state.carregando = true
        })

        builder.addCase(carregarEquipes.fulfilled, (state, { payload }) => {
            const map = payload.reduce((map: { [key: string]: EquipeModel }, equipe) => {
                map[equipe.id] = equipe;
                return map;
            }, {})

            const chaves = payload.reduce((arr: number[], equipe) => {
                arr.push(equipe.id)
                return arr;
            }, [])

            state.carregando = false;
            state.chaves = chaves;
            state.dados = map;
        })

        builder.addCase(carregarServicos.fulfilled, (state, { payload }) => {
            const map : { [key: string]: ServicoProgramadoModel[] } = payload.reduce((map: { [key: string]: ServicoProgramadoModel[] }, servico) => {
                if (!map[servico.equipeId])
                    map[servico.equipeId] = [];
                
                map[servico.equipeId].push(servico);
                return map;
            }, {})

            Object.keys(map).forEach(key => {
                state.dados[key].services = map[key];
            }
            )


        })
    },
    reducers: {

    }
})


equipesSlice.actions

export default equipesSlice.reducer;