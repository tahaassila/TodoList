
import { useState } from 'react';
import './App.css';
import { useRef } from 'react';

function App() {
  const [todos, settodos] = useState([]);


  const inputRef = useRef();
  const handleAddTodo = ()=>{
const text = inputRef.current.value;
const newItem = {completed: false, text}
settodos([...todos , newItem]);
     inputRef.current.value = "";
  };
  const handleItemDone = (index)=>{
const newTodos = [...todos]
newTodos[index].completed = !newTodos[index].completed
settodos(newTodos)

  }
  const handleDeleteItem  = (index)=>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    settodos(newTodos)
  }
  return (   



<div className='app' >


<h2>To Do List</h2>
<div className='todolist' >
<ul  >
{todos.map(({text, completed }, index)=>{
 return <div className='item' >
   <li className={completed ? 'done':''} key={index} onClick={ ()=> handleItemDone(index)} >{text}</li>
   <span onClick={()=>handleDeleteItem(index)} >'❌'</span>
   </div>
})}
</ul>
<input ref={inputRef}  placeholder='Enter item...' />

<button  onClick={handleAddTodo} >add</button>


</div>


</div>






  );

}

export default App;
