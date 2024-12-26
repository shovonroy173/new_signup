/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../../actions/actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const todosList = useSelector((state)=> state.todo)
  console.log("LINE AT 5" , todosList);
  
  return (
    <div>
      <h3 className={`${todo.completed ? "text-red-500" : ""}`}>
        {todo.title}
      </h3>
      <div className="flex gap-5 ">
        <button onClick={() => dispatch(completedTodo(todo.id))}>Complete</button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;