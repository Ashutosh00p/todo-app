import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {


  if (!todos || todos.length === 0) {

    return (

      <div style={styles.emptyBox}>

        <h3 style={styles.emptyTitle}>
          No Tasks Found
        </h3>

        <p style={styles.emptyText}>
          Add your first task to get started 🚀
        </p>

      </div>

    );

  }



  return (

    <div style={styles.container}>

      <h2 style={styles.heading}>
        Your Tasks
      </h2>


      {
        todos.map((todo)=>(

          <TodoItem

            key={todo._id || todo.id}

            todo={todo}

            onToggle={onToggle}

            onDelete={onDelete}

            onEdit={onEdit}

          />

        ))
      }


    </div>

  );

};



const styles = {


container:{

  marginTop:"20px",

},



heading:{

  color:"#0d6efd",

  marginBottom:"20px",

  fontSize:"22px"

},



emptyBox:{

  marginTop:"30px",

  padding:"40px",

  textAlign:"center",

  background:"#fff",

  borderRadius:"15px",

  boxShadow:
    "0 8px 20px rgba(0,0,0,0.08)"

},



emptyTitle:{

  marginBottom:"10px",

  color:"#444"

},



emptyText:{

  color:"#666",

  fontSize:"16px"

}


};



export default TodoList;