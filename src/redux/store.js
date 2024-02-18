import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import charactersReducer from './charactersSlice'
import paginationReducer from './paginationSlice'

const store =configureStore({
    reducer:{
        counter:counterReducer,
        characters:charactersReducer,
        pagination:paginationReducer,
        //aca puedo agregar otros reducers
    }
})

export default store