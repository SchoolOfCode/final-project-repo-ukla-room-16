import { useState } from "react";

export default function EditableComponent({ defaultIsEditing = false, Text }) {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const [Name, setName] = useState(Text);
  console.log(Name)
  if (!isEditing) {
    //Non-edit mode
    return (
      <span key={Text}>
        <p> {Name} </p>
        <button onClick={(e) => setIsEditing(!isEditing)}>Edit</button>
      </span>
    );
  }

  //Edit mode
  return (
    <span key={Text} >
      Email:
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" onClick={(e) => setIsEditing(!isEditing)}>
        Save
      </button>
    </span>
  );
}
