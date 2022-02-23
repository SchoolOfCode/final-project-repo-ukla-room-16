import { useState } from "react";
import FamilyForm from "./FamilyForm";

function CreateTree() {
  const [display, setDisplay] = useState(false);


  return (
    <div>
      <button onClick={() => setDisplay(true)}>Create A Tree</button>
      <FamilyForm onClose={() => setDisplay(false)}
          display={display} setDisplay={setDisplay}/>
    </div>
  );
}

export default CreateTree;
