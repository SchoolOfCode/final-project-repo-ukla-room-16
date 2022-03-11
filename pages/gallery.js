import { useUser } from "@auth0/nextjs-auth0";
import {useState, useEffect} from 'react';

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Gallery.module.css";
import style from "../styles/Header.module.css";

import NavBar from "../component/NavBar";
import Header from "../component/Header";


export default function Gallery({ images }) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const { user, isLoading, error } = useUser();
  const [person, setPerson] = useState("");
  const [familyName, setFamilyName] = useState("");

  useEffect(() => {
    async function getUsers(personLoggingIn) {
      const res = await fetch(`${URL}/users`, {
        method: "GET",
      });
      const data = await res.json();
      const index = data.payload.findIndex((person) => {
        return person.email === personLoggingIn.email;
      });
      setPerson(data.payload[index]);

      let familyID = data.payload[index].family_id;
      const familyRes = await fetch(`${URL}/families/${familyID}`, {
        method: "GET",
      });
      const familyData = await familyRes.json();
      setFamilyName(familyData.payload[0].name);
    }
    if (user) {
      getUsers(user);
    }
  }, [user]);

  if (isLoading) return <div>...loading</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
          <Head>
            <title>{familyName}'s Images</title>
            <meta name="description" content="All my images." />
          </Head>

      <Header user={user} person={person} familyName={familyName} className={style.familytext}/>
      <div className={styles.container}>
        <div className={styles.leftcolumn}>
      <NavBar />
      </div>
        <div className={styles.middlecolumn}>

          <h1 className={styles.familyname}>The {familyName} family's Gallery</h1>
          <div className={styles.images}>
            {images.map((image) => {
                      console.log(image)
              return (
                <div key={image.id}>
                  <a href={image.link} rel="noreferrer">
                    <div className={styles.imageImage}>
                     <Link href={image.image}><a target="_blank">
                      <Image
                        width={image.width}
                        height={image.height}
                        src={image.image}
                        alt=""
                  
                      />
                       </a></Link> 

                    </div>
                    
                  </a>
                </div>
              );
            })}
          </div>
          </div>
        </div>
    </>
  );
}

export async function getStaticProps() {
  const params = {
    expression: 'folder="my_test_uploads"',
  };
  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());

  const { resources } = results;

  const images = resources.map((resource) => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });

  return {
    props: {
      images,
    },
  };
}
