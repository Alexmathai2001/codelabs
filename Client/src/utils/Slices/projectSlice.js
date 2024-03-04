import { createSlice } from "@reduxjs/toolkit";


const projectSlice = createSlice(
    {
        name : 'project',
        initialState : {
            myproject : null
        },
        reducers : {
            addMyproject : (state,action) => {
                state.myproject = action.payload
            }
        }
    }
)

export const {addMyproject} = projectSlice.actions

export default projectSlice.reducer