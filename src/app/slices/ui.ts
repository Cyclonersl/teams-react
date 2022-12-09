import { RootState } from './../store';
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export enum Dialogs {
    QRCODE
}

interface StateProps {
    dialogs: Dialogs[]
}

const initialState: StateProps = {
    dialogs: []
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openDialog: (state, action: PayloadAction<Dialogs>) => {
            state.dialogs.push(action.payload);
        },
        closeDialog: (state, action: PayloadAction<Dialogs>) => {
            const index = state.dialogs.indexOf(action.payload);
            state.dialogs.splice(index, 1);
        }
    }
})

export default uiSlice.reducer;
export const { openDialog, closeDialog } = uiSlice.actions

const selectSelf = (state: RootState) => state.ui
export const selectDialogs = createSelector(selectSelf, (state) => state.dialogs);

export const selectIsOpen = createSelector([selectDialogs, (state, id) => id], (dialogs, id) => dialogs.includes(id)) 