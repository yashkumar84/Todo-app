import { useTodoStore } from "../store/todo-store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, ListChecks } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const List = () => {
  const { todos, removeToDo } = useTodoStore();

  const doDelete = (id: number) => {
    removeToDo(id);

    toast({
      variant: "destructive",
      title: "Task Deleted Successfully",
      duration: 3000,
      description: `Task is Deleted for id ${id}`,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Toaster />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <ListChecks className="h-6 w-6" />
            Task List
          </CardTitle>
          <Badge variant="secondary">{todos.length} Tasks</Badge>
        </CardHeader>
        <CardContent>
          {todos.length === 0 ? (
            <div className="text-center text-gray-500 py-4">
              No tasks available. Add a new task to get started!
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Name</TableHead>
                  <TableHead className="flex-1">Description</TableHead>
                  <TableHead className="text-right w-[100px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {todos.map((todo) => (
                  <TableRow key={todo.id}>
                    <TableCell className="font-medium">{todo.name}</TableCell>
                    <TableCell>{todo.desc}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => doDelete(todo.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default List;
