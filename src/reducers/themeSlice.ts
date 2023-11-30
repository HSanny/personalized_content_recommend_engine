import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
    currTheme: string;
}

const initialState: ThemeState = {
    currTheme: 'default', // default mood
};

// Why different Naming: ThemeSlice & ThemeReducer

// Slice File (themeSlice.ts): The file named themeSlice.ts typically contains a slice of the Redux state, created using createSlice from Redux Toolkit. A "slice" here means a piece of the state and the logic to handle that specific part of the state, including the reducer and any actions.

// Reducer Naming (themeReducer): When importing the slice into the store.ts, it's often renamed to themeReducer or similar to clarify its role in the Redux store. This is because, technically, what createSlice returns is a reducer function along with action creators. The naming themeReducer makes it clear that this imported item is the reducer function that will be used in the Redux store configuration.

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.currTheme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;