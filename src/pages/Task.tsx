/* eslint-disable @typescript-eslint/no-unused-vars */
import { AddTask } from "@/components/module/AddTask";
import TaskCard from "@/components/module/TaskCard";
import { selectFilters, selectTasks } from "@/Redux/features/task/taskSlice";
import { useAppSelector } from "@/Redux/hooks";
import { TTask } from "@/types";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilters);
  console.log(tasks, filter);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between">
        <h1>Tasks</h1>
        <AddTask/>
      </div>

      <div className="space-y-5 mt-5">
        {
          tasks.map((task:TTask) => <TaskCard task={task} key={task.id}/>)
        }
      </div>
    </div>
  );
};

export default Task;
