import { RootState } from '../store';
import { Middleware } from '@reduxjs/toolkit';
import { Dispatch } from '@reduxjs/toolkit';
import SocketClient from '../socket';


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
            SocketClient.getInstance().join(getState().equipes.ids);

            break;
    }
    return next(action);
}
