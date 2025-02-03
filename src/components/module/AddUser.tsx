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
import { useAppDispatch } from "@/Redux/hooks";
import { addUser } from "@/Redux/features/user/user";
import { TUser } from "@/types";
// import { TTask } from "@/types";

export function AddUser() {
  const form = useForm();
  const dispatch = useAppDispatch();

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    dispatch(addUser(data as TUser))
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border border-green-500 text-green-500"
        >
          Add User
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          Fill up this form
        </DialogDescription>

        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="write your name"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
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
