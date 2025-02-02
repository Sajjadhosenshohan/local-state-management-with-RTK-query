import { RootState } from "@/Redux/store";
import { TTask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
    tasks: TTask[],
    filter: "all"|"high"| "medium"|"low"
}
const initialState: TInitialState = {
  tasks: [
    // {
    //   id: "834hj9f84fn854ncy",
    //   title: "workout",
    //   description: "Do 100 pushup",
    //   dueDate: "2025-02-04",
    //   isCompleted: false,
    //   priority: "High",
    // },
    // {
    //   id: "834hj9f84fn854nsfdcy",
    //   title: "Make a video",
    //   description: "Make a meme video",
    //   dueDate: "2025-02-04",
    //   isCompleted: false,
    //   priority: "Medium",
    // },
    // {
    //   id: "834hj9f84fn8fdsdf54ncys",
    //   title: "Read a book",
    //   description: "Reading a book is obviously good practice",
    //   dueDate: "2025-02-04",
    //   isCompleted: false,
    //   priority: "Low",
    // },
  ],
  filter: "all"
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state,action:PayloadAction<TTask>)=>{
      state.tasks.push(action.payload)
    }
  },
});


export const selectTasks = (state: RootState)=>{
    return state.todo.tasks
}

export const selectFilters = (state: RootState)=>{
    return state.todo.filter
}


export const {addTask} = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
