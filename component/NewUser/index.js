//PASSING IN THE PROP USERS (WITH JUST THE NAME AND EMAIL)
import {useState} from 'react'



const NewUsers = ({ name, email, picture }) => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [newUser, setNewUser] = useState(false)

  async function onLogin(nameOfUser,emailOfUser, pictureOfUser) {

    const postObj = {
      full_name: nameOfUser,
      email: emailOfUser,
      picture: pictureOfUser
    };


    //fetching the users table
    const res = await fetch(`${URL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();


    //CHECKING IF THAT USER EXISTS
    const index = data.payload.findIndex(person => { return person.email === postObj.email})
    if(index>=0) {
      setNewUser(true)
    }
    if(newUser === false) {
    //IF THAT USER DOES NOT EXIST, ADD THEM TO THE USERS TABLE
      if(index === -1) {
        async function postUsers() {
          const res = await fetch(`${URL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postObj),
        })
      const data = await res.json()};
        postUsers()
      }
  }

}
onLogin(name,email, picture)

  return <div></div>;
};

export default NewUsers;
