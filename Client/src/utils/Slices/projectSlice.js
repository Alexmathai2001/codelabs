import { createSlice } from "@reduxjs/toolkit";


const projectSlice = createSlice(
    {
        name : 'project',
        initialState : {
            myproject : null,
            ProjectData : null
        },
        reducers : {
            addMyproject : (state,action) => {
                state.myproject = action.payload
            },
            addProjectData : (state,action) => {
                state.ProjectData = action.payload
            }
        }
    }
)

export const {addMyproject,addProjectData} = projectSlice.actions

export default projectSlice.reducer