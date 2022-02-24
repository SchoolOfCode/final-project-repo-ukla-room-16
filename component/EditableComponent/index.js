import { useEffect, useState } from "react";

// name displayed on page load
// on save, send update to database

export default function EditableComponent({ defaultIsEditing = false, text, fieldName }) {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const [textUpdate, setTextUpdate] = useState(text);
  console.log(textUpdate)

  if (!isEditing) {
    //Non-edit mode
    return (
      <span>
        <p> {textUpdate} </p>
        <button onClick={(e) => setIsEditing(!isEditing)}>Edit</button>
      </span>
    );
  }

  //Edit mode
  return (
    <span >
      {fieldName}:
      <input
        type="text"
        placeholder={fieldName}
        name={fieldName}
        onChange={(e) => setTextUpdate(e.target.value)}
      />
      <button type="submit" onClick={(e) => setIsEditing(!isEditing)}>
        Save
      </button>
    </span>
  );
}
