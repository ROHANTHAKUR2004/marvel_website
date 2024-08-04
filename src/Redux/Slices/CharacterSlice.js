import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from '../../Configs/axiosInstance';

const initialState = {
    characterList: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'

}

export const getAllCharacters = createAsyncThunk('characters/fetchAll', async () => {
    try {
        const response =  AxiosInstance.get('characters', {
            params: {
                apikey: '4479c0e8080e207ad3cdcb63f1d540cf',
                ts: '1722603293325',
                hash: '078aef99d5fd4ede300e813c675a3eeb'
            }
        });
        return await response // Adjust according to the actual response structure
    } catch (error) {
        console.error("Error fetching characters:", error);

    }
});

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCharacters.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllCharacters.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.characterList = action.payload.data.data.results;
            })
            .addCase(getAllCharacters.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ;
            });
    }
});

export default characterSlice.reducer;


