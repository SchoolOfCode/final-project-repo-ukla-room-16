//PASSING IN THE PROP USERS (WITH JUST THE NAME AND EMAIL)
import { useEffect } from "react";
//CUSTOM HOOK ?
const NewUsers = ({ name, email, picture }) => {
  const URL = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    async function onLogin(nameOfUser, emailOfUser, pictureOfUser) {
       console.log("On login running")
      const postObj = {
        full_name: nameOfUser,
        profile_name: nameOfUser,
        email: emailOfUser,
        picture: pictureOfUser,
      };

      const res = await fetch(`${URL}/users`);
      const data = await res.json();

      //CHECKING IF THAT USER EXISTS
      const index = data.payload.findIndex((person) => {
        return person.email === postObj.email;
      });

      console.log("this is the index" + index)

      if (index === -1) {
          async function postUsers() {
            const res = await fetch(`${URL}/users`, {
              method: "POST",
              //EXTRA INFORMATION RELATED TO THE REQUEST 
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(postObj),
            });
            const data = await res.json();
            console.log("This is the new user ", data)
          }
          postUsers();
        
      }
    }
    onLogin(name, email, picture);
    console.log("Use effect is running")
  }, []);
  //fetching the users table
  return null;
};

export default NewUsers;
