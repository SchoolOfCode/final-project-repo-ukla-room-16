import { useState } from "react";
import FamilyForm from "./FamilyForm";

function CreateTree({email}) {
  const [display, setDisplay] = useState(false);


  return (
    <div>
      <button onClick={() => setDisplay(true)}>Create A Tree</button>
      <FamilyForm onClose={() => setDisplay(false)}
          display={display} setDisplay={setDisplay} email={email}/>
    </div>
  );
}

export default CreateTree;
