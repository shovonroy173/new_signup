// import { useSelector } from "react-redux"
import { useGetTodosQuery } from "../../rtk_query/endpoints/getTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
    // const todosList = useSelector((state)=> state.todo)
    // console.log("LINE AT 5" , todosList);
    const {data, isLoading, isError} = useGetTodosQuery();
    console.log("LINE AT 5" , data );
    
    
  return (
    <div className="flex flex-col gap-5 p-10">TodoList 
      {data?.todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default TodoList