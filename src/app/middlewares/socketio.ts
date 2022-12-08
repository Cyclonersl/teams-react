import { SituacaoEquipeMessage } from './../../model/SituacaoEquipeMessage';
import { RootState } from '../store';
import { Middleware } from '@reduxjs/toolkit';
import { Dispatch } from '@reduxjs/toolkit';
import SocketClient from '../socket';
import { useAppSelector } from '../hooks';
import { selectEquipesIdsPreferencia, updateSituacaoEquipe } from '../slices/equipes';


interface SocketMiddlewareParams {
    dispatch: Dispatch
    store: RootState
}

export const socketMiddleware: Middleware<{}, RootState, Dispatch> = params => (next: any) => (action: any) => {
    const { dispatch, getState } = params;
    const { type, payload } = action;

    switch (type) {
        case 'equipes/carregar/fulfilled':
            next(action)
            const ids = selectEquipesIdsPreferencia(getState())
            SocketClient.getInstance().join(ids);
            break;
    }
    return next(action);
}
