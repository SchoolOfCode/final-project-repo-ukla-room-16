import { useState } from "react";
import FamilyForm from "./FamilyForm";

function CreateTree() {
  const [display, setDisplay] = useState(false);

  function buttonClick() {
    setDisplay(true);
  }

  return (
    <div>
      {/* <button onClick={buttonClick}>Create A Tree</button> */}
      <FamilyForm />
    </div>
  );
}

export default CreateTree;
