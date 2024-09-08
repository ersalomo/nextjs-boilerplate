import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface DefaultStates {
    isLoading: boolean;
    users: Array<string>;
}

const initialState: DefaultStates = {
    isLoading: false,
    users: [],
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setUsers: (state, action: PayloadAction<Array<string>>) => {
            state.users = action.payload;
        },
    },
})

const globalReducer = {}

export default globalReducer;


