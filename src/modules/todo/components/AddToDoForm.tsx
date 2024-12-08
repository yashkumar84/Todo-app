import { useForm } from "react-hook-form";
import { useTodoStore } from "../store/todo-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Zod Schema for Validation
const todoSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Task Name must be at least 3 characters" })
    .max(30, { message: "Task Name cannot exceed 30 characters" }),
  desc: z
    .string()
    .min(10, { message: "Task Description must be at least 10 characters" })
    .max(200, { message: "Task Description cannot exceed 200 characters" }),
});

// Type inference from Zod Schema
type ToDoFields = z.infer<typeof todoSchema>;

const AddToDoForm = () => {
  // Using Zustand
  const addToDo = useTodoStore((state) => state.addTodo);

  // React Hook Form with Zod Resolver
  const form = useForm<ToDoFields>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      name: "",
      desc: "",
    },
  });

  // Handle Form Submission
  const onSubmit = (data: ToDoFields) => {
    const todoWithId = {
      ...data,
      id: Date.now(),
    };

    addToDo(todoWithId);

    // Show toast notification
    toast({
      title: "Task Added Successfully",
      description: `"${data.name}" has been added to your task list.`,
      duration: 3000,
    });

    // Reset form
    form.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Add New Task
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter task name"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your task"
                        {...field}
                        className="w-full"
                        rows={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" variant="default">
                Add New Task
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Add Toaster Component */}
      <Toaster />
    </div>
  );
};

export default AddToDoForm;
