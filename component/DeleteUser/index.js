import { useState } from "react";
import DeleteForm from "./DeleteForm";
import Image from "next/image";
import bin from "../../images/bin.png";

function DeleteUser({ router }) {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <button
        onClick={() => setDisplay(true)}
      >
      <Image src={bin} width="50vw" height="50vh" />
      </button>
      <DeleteForm
        onClose={() => setDisplay(false)}
        display={display}
        setDisplay={setDisplay}
        router={router}
      />
    </div>
  );
}

export default DeleteUser;
