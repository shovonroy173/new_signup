import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions/actions";

const TodoInput = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
  
    const onInputTodo = (e) => {
      setTodo(e.target.value);
    };
    //handle submission of todo
    const handleTodoSubmit = (e) => {
      e.preventDefault();
      dispatch(addTodo({ id: Math.floor(Math.random() * 20) + 1.1, title: todo, completed: false })); // dispatch addTodo

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