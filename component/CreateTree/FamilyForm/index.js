import { useState } from "react"


function FamilyForm() {
    const [text, setText] = useState("")
    function handleChange(e) {
        setText(e.target.value);
      }

      function handleSubmit(event) {
        event.preventDefault();
        setText("")
      }
      return (
        <form onSubmit={handleSubmit}>
        <input placeholder="Family Name" onChange={handleChange} value = {text}/> 
            <button>Submit</button>
        </form>
      );
        
}

export default FamilyForm;