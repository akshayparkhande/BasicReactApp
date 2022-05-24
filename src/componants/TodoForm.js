import { useState } from "react";

const TodoForm = () => {
  let [userInput, setUserInput] = useState();
  let [items, setItem] = useState([]);
  const addItem=()=>{
    setItem([...items,userInput])
  }
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <div class="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={addItem}
          >
            button
          </button>
        </div>
      </div>
      <div>{items.map((item)=><ul><li>{item}</li></ul>)}</div>
    </div>
  );
};

export default TodoForm;
