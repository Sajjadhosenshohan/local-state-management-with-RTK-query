import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {  TUser } from "@/types";

import { useAppDispatch } from "@/Redux/hooks";
import { removeUser } from "@/Redux/features/user/user";

type IProps = {
  user: TUser;
};


const UserCard = ({ user }: IProps) => {
    const dispatch = useAppDispatch()

  return (
    <div className="border px-5 py-3 rounded-md">
        
      <div className="flex justify-between items-center">
        <div>
          <div className="flex gap-2 items-center">
            <h1 className="text-green-500">{user.name}</h1> <br />
          </div>
          <p>{user.isDeleted}</p>
        </div>

        <div className="flex gap-3 items-center">
          <Button onClick={()=>dispatch(removeUser(user.id))} variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
          {/* <Checkbox onClick={()=>dispatch(toggleCompletedStatus(task.id))}/> */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
