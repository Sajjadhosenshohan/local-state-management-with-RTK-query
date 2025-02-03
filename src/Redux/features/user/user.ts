import { RootState } from "@/Redux/store";
import { TUser } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

type TInitialState = {
  users: TUser[];
};
const initialState: TInitialState = {
  users: [
    {
      id: "fju348ufiureh",
      name: "Mofiz",
      isDeleted: false,
    },
    {
      id: "fju348ufsdfew4iureh",
      name: "Hafiz",
      isDeleted: false,
    },
  ],
};


type DraftUser = Pick<TUser, "name">;

const createUser = (userData: DraftUser) =>{
    return {
        id: nanoid(),
        ...userData,
        isDeleted: false
    }
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state,action:PayloadAction<TUser>)=>{
        const userData = createUser(action.payload);

        state.users.push(userData)
    },


    removeUser: (state,action:PayloadAction<string>)=>{
        state.users = state.users.filter((user)=> {
            if(user.id !== action.payload){
                return user
            }
        })
    },
  },
});


export const selectUsers = (state: RootState) => {
  const users = state.allUser.users;
  return users
};

export const { addUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
