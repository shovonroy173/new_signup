/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { completedTodo, deleteTodo } from "../../actions/actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="bg-gray-100 p-2 rounded-md">
      <h3 className={`${todo.completed ? "text-red-500" : ""}`}>
        Todo Title : {todo?.todo},
        Todo authos : {todo?.userId} 
      </h3>
      <div className="flex gap-5 p-5">
        <button onClick={() => dispatch(completedTodo(todo.id))} className="bg-gray-700 text-gray-100 p-3 rounded-md">Complete</button>
        <button onClick={() => dispatch(deleteTodo(todo.id))} className="bg-gray-700 text-gray-100 p-3 rounded-md">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;