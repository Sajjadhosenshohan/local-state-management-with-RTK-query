import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { TTask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import {
  deleteTask,
  toggleCompletedStatus,
} from "@/Redux/features/task/taskSlice";
import { selectUsers } from "@/Redux/features/user/user";

type IProps = {
  task: TTask;
};
const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const assignToUser = users?.find((u) => u.id === task.assignTo);
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex gap-2 items-center">
            <div
              className={cn("size-3 rounded-full", {
                "bg-green-500": task.priority === "low",
                "bg-yellow-500": task.priority === "medium",
                "bg-red-500": task.priority === "high",
              })}
            ></div>

            <div className="">
              <h1 className={cn({ "line-through": task.isCompleted })}>
                {task.title}
              </h1>
              <h1>Assign To: <span className="text-red-500 font-bold">{assignToUser?.name}</span></h1>
            </div>
          </div>
          <p>{task.description}</p>
        </div>

        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox onClick={() => dispatch(toggleCompletedStatus(task.id))} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
