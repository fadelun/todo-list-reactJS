const Form = ({ setInputText, setTodos, inputText, todos, setStatus }) => {
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.floor(Math.random() * 999) }]);
    setInputText("");
  };

  const changeHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input value={inputText} onChange={inputHandler} type="text" className="todo-input" />
      <button onClick={handlerSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onClick={changeHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
