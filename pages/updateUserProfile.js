import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import DeleteUser from "../component/DeleteUser";

import styles from "../styles/updateUserProfile.module.css";
import meal from "../images/meal.png";
import medical from "../images/medical.png";
import clothes from "../images/clothes.png";
import shoes from "../images/shoes.png";
import DateOfBirth from "../component/DOB";
import bin from "../images/bin.png";

export default function createUserProfile() {
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_URL;

  const [userName, setUserName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
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

  async function handleClick() {
    const updatesArray = [
      { profile_name: userName },
      { mobile_number: mobile },
      { address: address },
      {
        dob:
          startDate.toString().slice(8, 10) +
          startDate.toString().slice(3, 7) +
          startDate.toString().slice(10, 15),
      },
      { gender: gender },
      { fav_food: favFood },
      { blood_type: bloodType },
      { allergies: allergies },
      { emergency_contacts: emergencyContact },
      { clothes_size_upper: upperClothes },
      { clothes_size_lower: lowerClothes },
      { shoe_size: shoeSize },
    ];

    updatesArray.forEach(async (update) => {
      const response = await fetch(`${URL}/users/${router.query.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(update),
      });
    });

    setTimeout(
      () =>
        router.push({
          pathname: "/users",
          query: { id: router.query.id },
        }),
      1000
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Link href={`/users?id=${router.query.id}`}>
          <a className={styles.goToUser}>X</a>
        </Link>
        <h3 style={{ color: "red" }}>
          Only update the fields you want to change
        </h3>
          <DeleteUser URL={URL} router={router} />
        <input
          className={styles.input}
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="name"
        />
        <div className={styles.dob}>
        <DateOfBirth startDate={startDate} setStartDate={setStartDate} />
        </div>
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
            <div>
              <ul>
                <select
                  value={shoeSize}
                  onChange={(e) => {
                    setShoeSize(e.target.value);
                  }}
                >
                  <option value="uk 4">UK 4</option>
                  <option value="uk 4.5">UK 4.5</option>
                  <option value="uk 5">UK 5</option>
                  <option value="uk 5.5">UK 5.5</option>
                  <option value="uk 6">UK 6</option>
                  <option value="uk 6.5">UK 6.5</option>
                  <option value="uk 7">UK 7</option>
                  <option value="uk 7.5">UK 7.5</option>
                  <option value="uk 8">UK 8</option>
                  <option value="uk 8.5">UK 8.5</option>
                  <option value="uk 9">UK 9</option>
                  <option value="uk 9.5">UK 9.5</option>
                  <option value="uk 10">UK 10</option>
                  <option value="uk 10.5">UK 10.5</option>
                  <option value="uk 11">UK 11</option>

                  {/* <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                  setShoeSize(e.target.value);
                }}
                placeholder="shoe size"
              /> */}
                </select>
              </ul>
            </div>
          </div>
        </div>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}
