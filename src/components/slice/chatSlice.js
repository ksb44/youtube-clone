import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:'chat',
    initialState:{

        message:[]
    },
    reducers:{

    addMessages:(state,action)=>{
        state.message.splice(13,1)
        state.message.push(action.payload)

    }


    }
})

export const {addMessages}=chatSlice.actions

export default chatSlice.reducer