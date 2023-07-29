import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface HomeStateProps {
    rootData: {id: number | string, link: string, name: string, type: string}[];
}

const initialState: HomeStateProps = {
    rootData: [],
};

// Define action
export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {
        storeRootData: (state, action: PayloadAction<HomeStateProps>) => {
            //push into state
            //@ts-ignore
            state.rootData = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {storeRootData} = homeSlice.actions;

export default homeSlice.reducer;
