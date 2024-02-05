import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counter',
    initialState:0,
    //creo los reducers
    reducers:{
        increment:state => state + 1,
        decrement:state => state -1,
        reset:state => state = 0
    },
})

//creo los actions
export const { increment,decrement,reset } = counterSlice.actions
//y exporto el archivo
export default counterSlice.reducer
