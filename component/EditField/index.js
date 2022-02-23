import { useState } from "react";

export default function EditableComponent({defaultIsEditing = false, Text}) {
    const [ isEditing, setIsEditing ] = useState(defaultIsEditing);
const [Name, setName] = useState(Text)
    if(!isEditing){
       //Non-edit mode
       return (
       
       <span>
        <p> {Name} </p>
        <button onClick={e=>setIsEditing(!isEditing)}>Edit</button>
        </span>);

    }

    //Edit mode
    return   (<span>Email: 
                              <input type="text" placeholder="email" name="email"  onChange={e=>setName(e.target.value)}/>
                               <button type="submit" onClick={e=>setIsEditing(!isEditing)}>Save</button>
                             </span>)
  
 }





