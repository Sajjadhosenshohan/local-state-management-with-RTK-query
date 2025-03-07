/* eslint-disable @typescript-eslint/no-unused-vars */
import { AddTask } from "@/components/module/AddTask";
import TaskCard from "@/components/module/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/Redux/api/baseApi";
import { filterTask} from "@/Redux/features/task/taskSlice";
import { useAppDispatch,  } from "@/Redux/hooks";
import { TTask } from "@/types";

const Task = () => {
  // const tasks = useAppSelector(selectTasks);
  // const filter = useAppSelector(selectFilters);

  const dispatch = useAppDispatch()

  const {
    data,
    isLoading,
    error
  } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true
  })

  if (isLoading) {
    return <h2>Loading....</h2>
  }
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between">
        <h1>Tasks</h1>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={()=>dispatch(filterTask("all"))}>all</TabsTrigger>
            <TabsTrigger value="high" onClick={()=>dispatch(filterTask("high"))}>high</TabsTrigger>
            <TabsTrigger value="medium" onClick={()=>dispatch(filterTask("medium"))}>medium</TabsTrigger>
            <TabsTrigger value="low" onClick={()=>dispatch(filterTask("low"))}>low</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTask />
      </div>

      <div className="space-y-5 mt-5">
        {!isLoading && data?.tasks && data?.tasks?.map((task: TTask) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Task;
