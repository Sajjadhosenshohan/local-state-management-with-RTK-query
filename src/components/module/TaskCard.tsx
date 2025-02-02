import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { TTask } from "@/types";
import { cn } from "@/lib/utils";

type IProps = {
  task: TTask;
};
const TaskCard = ({ task }: IProps) => {
  return (
    <div className="border px-5 py-3 rounded-md">
        
      <div className="flex justify-between items-center">
        <div>
          <div className="flex gap-2 items-center">


            <div className={cn("size-3 rounded-full", {
                "bg-green-500": task.priority === "Low",
                "bg-yellow-500": task.priority === "Medium",
                "bg-red-500": task.priority === "High",
            })}></div>


            <h1>{task.title}</h1> <br />
          </div>
          <p>{task.description}</p>
        </div>

        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
