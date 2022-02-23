const NewUsers = ({user}) => {
  const URL = process.env.NEXT_PUBLIC_URL;

  async function onLogin(name) {
    const postObj = {
        family_id: 1,
      full_name: name
    };

    const res = await fetch(`${URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postObj),
    });
    const data = await res.json();
    console.log(data);
  }

  onLogin(user)

  return (
    <div>
    </div>
  );
};

export default NewUsers;
