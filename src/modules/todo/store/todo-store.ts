import { create } from "zustand";

// Step-1 prepare a Todo Type (It is for to do record)
type Todo= {
    name:string;
    desc:string;
    id:number;
}
// Step-2 Prepare a ToDoState and actions (addTodo) , this contains the todo object and todo operations
interface ToDoState{
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeToDo:(id:number)=>void; // for remove
   
}

// step-3 create zustand store
export const useTodoStore = create<ToDoState>((set) => ({
    todos: [], // Initial state
    
    addTodo: (todo:Todo) =>
    //   set((state) => ({ // It uses set to update the state by adding a new todo.
    //     todos: [...state.todos, todo],
    //   })),
    set((state) => ({ // It uses set to update the state by adding a new todo.
        todos: [...state.todos, todo],
      })),
      removeToDo:(id:number)=>set((state) => ({ // It uses set to update the state by adding a new todo.
        todos: state.todos.filter(todo=>todo.id!==id),
      }))

    }));
    

    
