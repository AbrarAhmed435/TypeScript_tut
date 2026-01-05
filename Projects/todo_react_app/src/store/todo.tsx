import { createContext, useContext, useState, type ReactNode } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContextType = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
};

// ✅ Context name should be PascalCase
export const TodosContext = createContext<TodosContextType | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string): void => {
    setTodos((prev) => [
      {
        id: crypto.randomUUID(),
        task,
        completed: false,
        createdAt: new Date(),
      },
      ...prev,
    ]);
    console.log(todos)
  };

  return (
    <TodosContext.Provider value={{ todos, handleAddTodo }}>
      {children}
    </TodosContext.Provider>
  );
};


export const useTodo=()=>{
    const todosConsumer=useContext(TodosContext)
    if (!todosConsumer){
    throw new Error("UseTodos used outside of Provider")
    }
    return todosConsumer
}