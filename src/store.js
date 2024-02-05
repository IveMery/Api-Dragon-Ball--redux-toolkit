import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

const store =configureStore({
    reducer:{
        counter:counterReducer,
        //aca puedo agregar otros reducers

    }
})

export default store