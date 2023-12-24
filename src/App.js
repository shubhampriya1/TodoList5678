import logo from './logo.svg';
import './App.css';
import Header from './mycpmpoents/Header';
import Todos from './mycpmpoents/Todos';
import Footer from './mycpmpoents/Footer';
import  React,{useState} from 'react';
import AddTodo from './AddTodo';
function App() { 
  let initTodo;

  if(localStorage.getItem("todos")===null){
   initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    
   
    // console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
 
  const addTodo=(title,desc)=>{
    let sno;
    console.log("i am adding",title,desc)
    if(todos.length==0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1
    }
   
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    if(localStorage.getItem("todos")){
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  }
  const [todos,setTodos]=useState( initTodo);
  return (
   <>
   <Header title="MyTodoList" searchBar={false}/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
   </>
  );
}

export default App;
