//PASSING IN THE PROP USERS (WITH JUST THE NAME AND EMAIL)
const NewUsers = ({ name, email }) => {
  const URL = process.env.NEXT_PUBLIC_URL;

  async function onLogin(name,email) {

    const postObj = {
      family_id: 1,
      full_name: name,
      email: email
    };

    console.log(postObj)

    //fetching the users table
    const res = await fetch(`${URL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data)


    //CHECKING IF THAT USER EXISTS
    const index = data.payload.findIndex(person => { return person.email === postObj.email})

    //IF THAT USER DOES NOT EXIST, ADD THEM TO THE USERS TABLE
      if(index === -1) {
        async function postUsers() {
          const res = await fetch(`${URL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postObj),
        })};
        postUsers()
      }
  }

  onLogin(name, email);

  return <div></div>;
};

export default NewUsers;
