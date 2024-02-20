import { createSlice } from "@reduxjs/toolkit";
import { decrement, increment } from "./counterSlice";

const CharactersSlice = createSlice({
    name: 'characters',
    initialState: {
        list: [],
        favorites: [],
        isLoading: false,
        isModalOpen: false,
        selectedCharacter: null,
    },
    reducers: {
        setCharacterList: (state, action) => {
            state.list = action.payload
        },
        startLoading: (state) => {
            state.isLoading = true
        },
        stopLoading: (state) => {
            state.isLoading = false
        },
        setFavorites: (state, action) => {
            const existingCharacter = state.favorites.find(char => char.id === action.payload.id);
            if (!existingCharacter) {
                state.favorites.push(action.payload);
                increment()
            }
        },
        setDeleteFavorites: (state, action) => {
            state.favorites = state.favorites.filter(character => character.id !== action.payload.id)
            decrement()
        },
        openModal(state,action){
            state.isModalOpen = true
            state.selectedCharacter = action.payload;
            
        },
        closeModal(state){
            state.isModalOpen = false
            state.selectedCharacter = null;
        },
        
    },
})

export const { setCharacterList, startLoading, stopLoading, setFavorites, setDeleteFavorites,openModal,closeModal,isModalOpen,selectedCharacter } = CharactersSlice.actions
export default CharactersSlice.reducer