import {configureStore} from "@reduxjs/toolkit"

const appStore = configureStore({
    reducer : {
        project : projectSlice
    }
})
