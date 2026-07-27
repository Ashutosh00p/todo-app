import React from "react";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {

  return (

    <div
      style={{
        ...styles.card,
        background: todo.completed ? "#f1fff1" : "#fff"
      }}
    >


      <div style={styles.header}>

        <h3
          style={{
            ...styles.title,
            textDecoration: todo.completed
              ? "line-through"
              : "none",
            color: todo.completed
              ? "#777"
              : "#222"
          }}
        >
          {todo.title}
        </h3>


        <span
          style={{
            ...styles.badge,
            background:
              todo.priority === "High"
                ? "#dc3545"
                : todo.priority === "Medium"
                ? "#ffc107"
                : "#198754",

            color:
              todo.priority === "Medium"
                ? "#000"
                : "#fff"
          }}
        >
          {todo.priority || "Medium"}
        </span>


      </div>



      <p style={styles.description}>
        {todo.description || "No description"}
      </p>



      <div style={styles.info}>

        <p>
          <strong>Status:</strong>{" "}
          {
            todo.completed
            ? "Completed ✅"
            : "Pending ⏳"
          }
        </p>



        {
          todo.dueDate &&

          <p>
            <strong>Due Date:</strong>{" "}
            {
              new Date(
                todo.dueDate
              ).toLocaleDateString()
            }
          </p>

        }

      </div>



      <div style={styles.actions}>


        <button
          style={styles.completeBtn}
          onClick={() =>
            onToggle(
              todo._id || todo.id,
              !todo.completed
            )
          }
        >

          {
            todo.completed
            ? "Undo"
            : "Complete"
          }

        </button>




        <button
          style={styles.editBtn}
          onClick={() => onEdit(todo)}
        >
          Edit
        </button>




        <button
          style={styles.deleteBtn}
          onClick={() =>
            onDelete(
              todo._id || todo.id
            )
          }
        >
          Delete
        </button>


      </div>


    </div>

  );
};



const styles = {


card:{

  border:"none",

  borderRadius:"15px",

  padding:"20px",

  marginBottom:"15px",

  boxShadow:
    "0 8px 20px rgba(0,0,0,0.08)"

},



header:{

  display:"flex",

  justifyContent:"space-between",

  alignItems:"center",

  gap:"10px"

},



title:{

  margin:0,

  fontSize:"20px"

},



badge:{

  padding:"5px 12px",

  borderRadius:"20px",

  fontSize:"13px",

  fontWeight:"600"

},



description:{

  color:"#666",

  margin:"15px 0"

},



info:{

  color:"#444",

  fontSize:"14px"

},



actions:{

  display:"flex",

  gap:"10px",

  marginTop:"15px",

  flexWrap:"wrap"

},



completeBtn:{

  background:"#198754",

  color:"#fff",

  border:"none",

  padding:"8px 15px",

  borderRadius:"8px",

  cursor:"pointer"

},



editBtn:{

  background:"#0d6efd",

  color:"#fff",

  border:"none",

  padding:"8px 15px",

  borderRadius:"8px",

  cursor:"pointer"

},



deleteBtn:{

  background:"#dc3545",

  color:"#fff",

  border:"none",

  padding:"8px 15px",

  borderRadius:"8px",

  cursor:"pointer"

}


};


export default TodoItem;