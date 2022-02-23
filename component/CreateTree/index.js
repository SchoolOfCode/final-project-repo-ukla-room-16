import { useState } from "react";

function CreateTree() {
  const [display, setDisplay] = useState(false);

  function buttonClick() {
    setDisplay(true);
  }

  return (
    <div>
      <button onClick={buttonClick}>Create A Tree</button>
    </div>
  );
}

export default CreateTree;
