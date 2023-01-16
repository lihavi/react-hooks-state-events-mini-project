import React from "react";

function NewTaskForm({onTaskFormSUbmit,categories}) {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category,index)=>(
            <option key={index}>{category}</option>
          ))}

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
