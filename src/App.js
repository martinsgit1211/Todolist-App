import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import SignUp from './Components/Signup'
import LogIn from './Components/Login'
import Dashboard from './Components/Dashboard'
// import { useNavigate } from 'react-router-dom';

function App() {
  

  // const  [list,  setList] = useState([]);
  // const  [input, setInput] = useState("");

  // const  addTodo = (todo) => {
  //   const newTodo = {
  //     id: Math.random(),
  //     todo: todo
  //   }

  //   // add the todo to the list
  //   setList([...list, newTodo])

  //   //clear input box
  //   setInput("")
  // };
  
  // const removeTodo = (id) => {
  //   //Filter out todo with the id
  //   const newList = list.filter((todo) => todo.id !== id);

  //   setList(newList)
  // };
  return (
    <>
   {/* <center> <div className='container'>
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
    </center> */}


    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
        <Route path='/Login' element={<LogIn/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
