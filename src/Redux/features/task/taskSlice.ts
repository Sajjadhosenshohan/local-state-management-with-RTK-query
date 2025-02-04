import { RootState } from "@/Redux/store";
import { TTask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { removeUser } from "../user/user";
type TInitialState = {
  tasks: TTask[];
  filter: "all" | "high" | "medium" | "low";
};
const initialState: TInitialState = {
  tasks: [
    {
      id: "834hj9f84fn854ncy",
      title: "workout",
      description: "Do 100 pushup",
      dueDate: "2025-02-04",
      isCompleted: false,
      priority: "high",
      assignTo: null
    },
    {
      id: "834hj9f84fn854nsfdcy",
      title: "Make a video",
      description: "Make a meme video",
      dueDate: "2025-02-04",
      isCompleted: false,
      priority: "medium",
      assignTo: null
    },
    {
      id: "834hj9f84fn8fdsdf54ncys",
      title: "Read a book",
      description: "Reading a book is obviously good practice",
      dueDate: "2025-02-04",
      isCompleted: false,
      priority: "low",
      assignTo: null
    },
  ],
  filter: "all",
};

type DraftTask = Pick<TTask, "title" | "description" | "dueDate" | "priority" | "isCompleted" | "assignTo">;
const createTask = (taskData: DraftTask) => {
  return {
    ...taskData,
    id: nanoid(),
    assignTo: taskData?.assignTo ? taskData?.assignTo : null,
    isCompleted: false,
  };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TTask>) => {
      state.tasks.push(createTask(action.payload));
    },

    toggleCompletedStatus: (state,action:PayloadAction<string>) =>{
      state.tasks.forEach((task)=>{
        if(task.id === action.payload){
          task.isCompleted = !task.isCompleted
        }else{
          return task
        }
      })
    },

    deleteTask: (state,action:PayloadAction<string>)=>{
      state.tasks = state.tasks.filter((task)=>task.id !== action.payload)
    },

    filterTask: (state,action:PayloadAction<"all"| "high" | "medium" | "low">)=>{
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) =>{
    builder.addCase(removeUser, (state,action) =>{

      state.tasks.forEach((task)=> task.assignTo === action.payload ? (task.assignTo = null) : task)
    })
  }
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  const tasks = state.todo.tasks;

  if (filter === "low") {
    return tasks.filter((task)=> task.priority === "low");
  }else if(filter === "medium"){
    return tasks.filter((task)=> task.priority === "medium");
  }else if(filter === "high"){
    return tasks.filter((task)=> task.priority === "high");
  }else{
    return tasks;
  }
};

export const selectFilters = (state: RootState) => {
  const filter = state.todo.filter;
  return filter
};

export const { addTask,toggleCompletedStatus,deleteTask,filterTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
