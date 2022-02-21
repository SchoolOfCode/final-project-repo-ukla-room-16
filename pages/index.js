
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import frontimage from "../images/familia_frontpage_image.jpg"

export default function Home() {
  return (
    <div>
      <h1>Familia</h1>
      

      <Image
      src={frontimage}
      alt="Picture of a family from grandparents, to children and grandchildren"
      width="700em"
      height="700em"
    />




    </div>
  )
};