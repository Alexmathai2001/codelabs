import {configureStore} from "@reduxjs/toolkit"
import projectSlice from "./Slices/projectSlice"

const appStore = configureStore({
    reducer : {
        project : projectSlice
    }
})

export default appStore
