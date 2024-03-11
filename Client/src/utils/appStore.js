import {configureStore} from "@reduxjs/toolkit"
import projectSlice from "./Slices/projectSlice"
import userSlice from "./Slices/userSlice"

const appStore = configureStore({
    reducer : {
        project : projectSlice,
        user : userSlice
    }
})

export default appStore
