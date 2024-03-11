import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        logined : false,
        dev_list : null
    },
    reducers : {
        checkUserSignIn : (state,action) => {
            state.logined = !state.logined
        },
        addDevelopersList : (state,action) => {
            state.dev_list = action.payload
        }
    }
})

export const {checkUserSignIn,addDevelopersList} = userSlice.actions

export default userSlice.reducer