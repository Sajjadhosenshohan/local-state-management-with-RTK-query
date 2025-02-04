/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { addTask } from "@/Redux/features/task/taskSlice";
import { TTask, TUser } from "@/types";
import { selectUsers } from "@/Redux/features/user/user";
import { useState } from "react";
import { useCreateTaskMutation } from "@/Redux/api/baseApi";
// import { TTask } from "@/types";

export function AddTask() {
  const [open, setOpen] = useState(false);
  const form = useForm();
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const [createTask, { data, isLoading, isError }] = useCreateTaskMutation();
  console.log(data,44)

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    dispatch(addTask(data as TTask));
    const res = await createTask(data);
console.log(48,res)
    setOpen(false);
    form.reset();
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border border-green-500 text-green-500"
        >
          Add Task
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          Fill up this form
        </DialogDescription>

        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="write your title"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="write your description"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select ur priority" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Priority</SelectLabel>
                          <SelectItem value="high">high</SelectItem>
                          <SelectItem value="medium">medium</SelectItem>
                          <SelectItem value="low">low</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="assignTo"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>AssignTo</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select ur assignTo" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Assign-to</SelectLabel>
                          {users?.map((user: TUser) => {
                            return (
                              <SelectItem value={user.id}>
                                {user.name}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-5">
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        // disabled={(date) =>
                        //   date > new Date() || date > new Date("1900-01-01")
                        // }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" className="mx-auto mt-5">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
