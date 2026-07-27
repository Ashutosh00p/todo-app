import React, { useState } from "react";

const TodoForm = ({ onAddTodo }) => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = (e) => {

    e.preventDefault();


    if (!formData.title.trim()) {

      alert("Title is required");
      return;

    }


    onAddTodo({
      ...formData,
      completed:false,
    });



    setFormData({

      title:"",
      description:"",
      priority:"Medium",
      dueDate:"",

    });

  };



  return (

    <form
      onSubmit={handleSubmit}
      style={styles.form}
    >


      <h3 style={styles.heading}>
        Add New Task
      </h3>



      <input

        style={styles.input}

        type="text"

        name="title"

        placeholder="Task Title"

        value={formData.title}

        onChange={handleChange}

        required

      />




      <textarea

        style={styles.textarea}

        name="description"

        placeholder="Task Description"

        value={formData.description}

        onChange={handleChange}

        rows="4"

      />




      <select

        style={styles.input}

        name="priority"

        value={formData.priority}

        onChange={handleChange}

      >

        <option value="High">
          High Priority
        </option>

        <option value="Medium">
          Medium Priority
        </option>

        <option value="Low">
          Low Priority
        </option>


      </select>




      <input

        style={styles.input}

        type="date"

        name="dueDate"

        value={formData.dueDate}

        onChange={handleChange}

      />





      <button

        type="submit"

        style={styles.button}

      >

        Add Task

      </button>



    </form>

  );

};



const styles = {


form:{

  display:"flex",

  flexDirection:"column",

  gap:"15px",

},



heading:{

  textAlign:"center",

  color:"#0d6efd",

  marginBottom:"10px"

},



input:{

  width:"100%",

  padding:"12px",

  border:"1px solid #ddd",

  borderRadius:"8px",

  fontSize:"15px",

  boxSizing:"border-box",

  outline:"none"

},



textarea:{

  width:"100%",

  padding:"12px",

  border:"1px solid #ddd",

  borderRadius:"8px",

  fontSize:"15px",

  resize:"none",

  boxSizing:"border-box",

  outline:"none"

},



button:{

  padding:"12px",

  background:"#0d6efd",

  color:"#fff",

  border:"none",

  borderRadius:"8px",

  fontSize:"16px",

  fontWeight:"600",

  cursor:"pointer",

  transition:"0.3s"

}



};



export default TodoForm;