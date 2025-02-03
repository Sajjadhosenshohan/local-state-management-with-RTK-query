export type TTask = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "all"| "high" | "medium" | "low";
  assignTo: string | null;
};

export type TUser = {
  id: string;
  name: string;
  isDeleted: boolean
}
