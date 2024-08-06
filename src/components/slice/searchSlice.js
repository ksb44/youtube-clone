import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({

    name:'search',
    initialState:{},
    reducers:{

        caches(state,action){
           
           state=Object.assign(state,action.payload)
        }
    }
})
export const {caches}=searchSlice.actions

export default searchSlice.reducer