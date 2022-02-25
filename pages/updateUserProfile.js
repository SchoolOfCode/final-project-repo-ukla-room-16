import styles from "../styles/updateUserProfile.module.css";
import Image from "next/image";
import meal from "../images/meal.png";
import userProfile from "../images/userProfile.svg";
import medical from "../images/medical.png";
import clothes from "../images/clothes.png";
import shoes from "../images/shoes.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function createUserProfile() {
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_URL;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  // const [profilePic, setProfilePic] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [favFood, setFavFood] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [allergies, setAllergies] = useState("");
  const [upperClothes, setUpperClothes] = useState("");
  const [lowerClothes, setLowerClothes] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [gender, setGender] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");


  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`${URL}/users/1`);
        const data = await response.json();
        if (data.success === true) {
          setUser(data.payload[0]);
          setError("");
        } else {
          setError("Fetch didn't work :(");
        }
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }
    getUser();
  }, []);


  async function handleClick() {
    const updatesArray = [
      { profile_name: userName },
      { mobile_number: mobile },
      { address: address },
      { dob: dob },
      { gender: gender },
      { fav_food: favFood },
      { blood_type: bloodType },
      { allergies: allergies },
      {emergency_contacts: emergencyContact},
      {clothes_size_upper: upperClothes},
      {clothes_size_lower: lowerClothes},
      {shoe_size: shoeSize}
    ];
    console.log(updatesArray);
    updatesArray.forEach(async (update) => {
      const response = await fetch(`${URL}/users/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(update),
      });
    });

    
    setTimeout(() => router.push("/user"), 1000)
  }

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h3 style={{color: "red"}}>Only update the fields you want to change</h3>
        <Image src={user.picture ? user.picture: userProfile} width="259px" height="213px" />

        <input
          className={styles.input}
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="name"
        />
        {/* <input className={styles.input} type="text" onChange={e=> {(setEmail(e.target.value))}} placeholder="email" /> */}
        <input
          className={styles.input}
          type="text"
          onChange={(e) => {
            setDob(e.target.value);
          }}
          placeholder="DOB"
        />
        <input
          className={styles.input}
          type="text"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          placeholder="gender"
        />
        <input
          className={styles.input}
          type="text"
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          placeholder="mobile number"
        />
        <input
          className={styles.input}
          type="text"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="home address"
        />

        <div className={styles.info}>
          <div className={styles.subInfo}>
            <Image src={meal} width="85px" height="90px" />
            <ul>
              <input
                className={styles.input}
                type="text"
                onChange={(e) => {
                  setFavFood(e.target.value);
                }}
                placeholder="favourite food"
              />
            </ul>
          </div>
          <div className={styles.subInfo}>
          <div>
            <Image src={medical} width="80px" height="90px" />
          </div>
            <ul>
              <input
                className={styles.input}
                type="text"
                onChange={(e) => {
                  setBloodType(e.target.value);
                }}
                placeholder="blood type"
              />
              <br></br>
              <input
                className={styles.input}
                type="text"
                onChange={(e) => {
                  setAllergies(e.target.value);
                }}
                placeholder="allergies"
              />
              <br></br>
              <input
                className={styles.input}
                type="text"
                onChange={(e) => {
                  setEmergencyContact(e.target.value);
                }}
                placeholder="emergency contact"
              />
            </ul>
          </div>
          <div className={styles.subInfo}>
            <Image src={clothes} width="80px" height="90px" />
            <ul>
              <input
                className={styles.input}
                type="text"
                onChange={(e) => {
                  setUpperClothes(e.target.value);
                }}
                placeholder="clothes size upper"
              />
              <br></br>
              <input
                className={styles.input}
                type="text"
                onChange={(e) => {
                  setLowerClothes(e.target.value);
                }}
                placeholder="clothes size lower"
              />
            </ul>
          </div>
          <div className={styles.subInfo}>
            <Image src={shoes} width="80px" height="90px" />
            <ul>
              <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                  setShoeSize(e.target.value);
                }}
                placeholder="shoe size"
              />
            </ul>
          </div>
        </div>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}
