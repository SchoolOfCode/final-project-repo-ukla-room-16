import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'
import NavBar from "../component/NavBar"



export default function Gallery({images}) {
  
  return (
    <>  
      
     <div className={styles.container}>
     
          
        <div className={styles.leftcolumn}>
          <NavBar />
        </div>
        <div className={styles.middlecolumn}>
      <Head>
        <title>My Images</title>
        <meta name="description" content="All of my cool images." />
      </Head>

      
        <h1>My Images</h1>

        <h2 className={styles.header}>Images</h2>

        <ul className={styles.images}>
          {images.map(image => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <div className={styles.imageImage}>
                    <Image width={image.width} height={image.height} src={image.image} alt="" />
                  </div>
                  {/* <h3 className={styles.imageTitle}>
                    { image.title }
                  </h3> */}
                </a>
              </li>
            )
          })}
        </ul>
        </div>
        <div className={styles.rightcolumn}></div>
        </div>
        </>
  )
}

export async function getStaticProps () {
  const params = {
    expression: 'folder="my_test_uploads"'
  }
  const paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');

  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
    }
  }).then(r => r.json());

  const { resources } = results;

  const images = resources.map(resource => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height
    }
  });

  return {
    props: {
images
    }
  }



}