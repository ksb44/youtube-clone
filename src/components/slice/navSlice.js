import { createSlice } from "@reduxjs/toolkit";

const navSlice=createSlice({

    name:'app',
    initialState:{
        navOpen:true,
    },
    reducers:{
        openNav(state){
state.navOpen=!state.navOpen

        },
        closeNav(state){
            state.navOpen=false
            }
    }
})

export const {openNav,closeNav} =navSlice.actions

export default navSlice.reducer