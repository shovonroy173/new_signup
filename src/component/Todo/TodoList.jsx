import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todosList = useSelector((state)=> state.todo)
    console.log("LINE AT 5" , todosList);
    
  return (
    <div>TodoList 
      {todosList?.todo.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default TodoList