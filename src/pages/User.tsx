import UserCard from "@/components/module/UserCard"
import { selectUsers } from "@/Redux/features/user/user"
import { useAppSelector } from "@/Redux/hooks"
import { TUser } from "@/types"


const User = () => {
  const users = useAppSelector(selectUsers)
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between">
        <h1>All Users</h1>
      </div>

      <div className="space-y-5 mt-5">
        {users?.map((user: TUser) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  )
}

export default User
