import './App.css';
import { useState } from 'react';

function App() {
  const  [list,  setList] = useState([]);
  const  [input, setInput] = useState("");

  const  addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }

    // add the todo to the list
    setList([...list, newTodo])

    //clear input box
    setInput("")
  };
  
  const removeTodo = (id) => {
    //Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList)
  };
  return (
    <>
   <center> <div className='container'>
    <h1>Todolist</h1>
    <input 
    type='text'
    value={input}
    onChange={(e) => setInput(e.target.value)}
     />
    <button onClick={() =>addTodo(input)}>+</button>
    <div className='list'>
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>
          {todo.todo}
          <button onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
      )

      )}
    </ul>
    </div>
    </div>
    </center>
    
    </>
  );
}

export default App;
