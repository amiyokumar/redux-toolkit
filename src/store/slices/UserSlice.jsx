import {createSlice, legacy_createStore} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state,action){
            state.push(action.payload);
            // console.log(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload, 1);
        },
        deleteUsers(state,action) {
            return [];
        },
    }
})

console.log(userSlice.actions)

export {userSlice};
export const {addUser,removeUser,deleteUsers}= userSlice.actions;