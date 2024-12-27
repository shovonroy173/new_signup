import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions/actions";
import { useAddTodoMutation } from "../../rtk_query/endpoints/addTodos";
import { useGetTodosQuery } from "../../rtk_query/endpoints/getTodos";

const TodoInput = () => {
    const [todo, setTodo] = useState("");
    // const dispatch = useDispatch();
  
    const onInputTodo = (e) => {
      setTodo(e.target.value);
    };
    const {refetch} = useGetTodosQuery()
    const [addTodo] = useAddTodoMutation();
    //handle submission of todo
    const handleTodoSubmit = (e) => {
      e.preventDefault();
    addTodo({ userId: Math.floor(Math.random() * 20) , todo: todo, completed: false })
    // .upwrap()
    // .then(() => refetch())
      setTodo("");
    };

  return (
    <div><div>
    <form className="todo_form_container" onSubmit={handleTodoSubmit}>
      <input
        className="todo_input"
        type="text"
        placeholder="Enter your todo"
        value={todo}
        onChange={onInputTodo}
      />
      <button className="todo_btn">Add Todo</button>
    </form>
  </div></div>
  )
}

export default TodoInput