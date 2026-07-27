import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/api";


const Dashboard = () => {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    loadTodos();
  }, []);



  const loadTodos = async () => {

    try {

      setLoading(true);

      const res = await fetchTodos();

      setTodos(res.data);


    } catch (err) {

      console.error(err);
      alert("Failed to load tasks");

    } finally {

      setLoading(false);

    }

  };



  const handleAddTodo = async (todoData) => {

    try {

      await createTodo(todoData);

      loadTodos();


    } catch(err){

      console.error(err);
      alert("Failed to add task");

    }

  };



  const handleToggleTodo = async (id, completed) => {

    try {

      await updateTodo(id,{completed});

      loadTodos();


    }catch(err){

      console.error(err);
      alert("Failed to update task");

    }

  };



  const handleDeleteTodo = async(id)=>{

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );


    if(!confirmDelete) return;


    try{

      await deleteTodo(id);

      loadTodos();


    }catch(err){

      console.error(err);
      alert("Failed to delete task");

    }

  };



  const handleEditTodo = async(todo)=>{

    const title = prompt(
      "Edit Task Title",
      todo.title
    );


    if(!title) return;


    try{

      await updateTodo(todo._id,{
        ...todo,
        title
      });


      loadTodos();


    }catch(err){

      console.error(err);
      alert("Failed to update task");

    }

  };



  const total = todos.length;

  const completed =
    todos.filter(
      (t)=>t.completed
    ).length;


  const pending = total - completed;



  return (

    <div style={styles.container}>


      <h1 style={styles.heading}>
        My Todo Dashboard
      </h1>


      <div style={styles.stats}>


        <div style={styles.card}>
          <h2>{total}</h2>
          <p>Total Tasks</p>
        </div>


        <div style={styles.card}>
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>


        <div style={styles.card}>
          <h2>{completed}</h2>
          <p>Completed</p>
        </div>


      </div>



      <div style={styles.todoBox}>

        <TodoForm 
          onAddTodo={handleAddTodo}
        />

      </div>



      {
        loading ?

        <div style={styles.loading}>
          Loading tasks...
        </div>

        :

        <TodoList

          todos={todos}

          onToggle={handleToggleTodo}

          onDelete={handleDeleteTodo}

          onEdit={handleEditTodo}

        />

      }


    </div>

  );

};



const styles = {


container:{
  maxWidth:"1000px",
  margin:"30px auto",
  padding:"20px",
  background:"#f4f7fb",
  minHeight:"80vh"
},


heading:{
  textAlign:"center",
  color:"#0d6efd",
  marginBottom:"30px"
},


stats:{
  display:"flex",
  justifyContent:"space-around",
  gap:"20px",
  marginBottom:"30px",
  flexWrap:"wrap"
},


card:{
  background:"#fff",
  width:"220px",
  padding:"20px",
  textAlign:"center",
  borderRadius:"15px",
  boxShadow:"0 8px 20px rgba(0,0,0,0.1)"
},


todoBox:{
  background:"#fff",
  padding:"20px",
  borderRadius:"15px",
  marginBottom:"25px",
  boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
},


loading:{
  textAlign:"center",
  fontSize:"20px",
  color:"#666"
}


};



export default Dashboard;