
import React from "react";
import Image from "next/image";
import useapp from "../images/useapp.png";
import createtree from "../images/createtree.png";
import userupdate from  "../images/userupdate.png";
import dashboard from "../images/dashboard.png";
import familytree from "../images/familytree.png";
import enterfamilyname from "../images/enterfamilyname.png";


import logofamilia from "../images/Familia9.png";
import styles from "../styles/QuickStart.module.css";

const quickStart = () => {
    return (
        <>
       
        <Image
          src={logofamilia}
          alt="logo saying Familia, the name of our app"
          className={styles.logo} />

        <Image src={useapp}
        alt="image of a handclick"
        className={styles.imageuseapp}
        width="50px"        
        height="50px" 
        />

      <div className={styles.container}>

    <div></div>

      <div className={styles.title}>How to use the Familia app</div>

     <div className={styles.video}>
      {/* <video autoPlay loop style={{ width: '500px', height: '500px' }}>
         <source src="../images/familia_video.mp4" />
      </video> */}
        {/* //<ReactPlayer src={familiaVideo} /> </div> */}
        <video controls src={"/familia_video.mp4"} style={{ width: "400px", height:"400px" }} />

        </div>
      
        

  
<div className={styles.leftcolumn}>   </div>


<div className={styles.middlecolumn}>   


      <div className={styles.login}>
        Create an account on the homepage using either your personal email,
        Facebook, Twitter, or Google accounts.
      </div>
      

      
      <div className={styles.createtree}>   
      You will be redirected to a landing page that prompts you to either join a
      family tree or create a family tree. It is as simple as that. After
      joining or creating a family tree, you will be redirected to a dashboard
      page where you can view most of the features of the app on it.
      </div>

       <div className={styles.dashboard}>   
       On the
      Dashboard page, you can post feeds and pictures, view posts from other
      members of your family who are on your family tree, like their posts, view
      upcoming events and so much more. This is fun as you get to read messages
      from loved ones and keep up to date with birthdays, graduations, and
      anniversaries. 
      </div>
      
      <div className={styles.familytree}>   
      With the family tree in Familia, you can add family members
      to your tree and when they create an account on the app, all they have to
      do is join the family and they get to view all posts, pictures, videos,
      and share memories with you. 
      </div>

      <div className={styles.user}>  
      At the top right-hand corner of the page, you
      have a profile picture which when clicked would take you to your own
      profile page where you can view and update information like address,
      favourite food, clothes and shoe size. 
      </div>

      <div className={styles.otheruser}>  
      The fun doesn't stop there as you
      can also click on the profile pictures of family members and you too can
      view their profile; however, you can not update their page. 
      </div>

      <div className={styles.delete}>  
      If you no
      longer want to be a part of the family, you can always delete your profile
      and join a different family if you wish to do so.
      </div>

</div>
      <div className={styles.rightcolumn}>  
      
      <Image src={createtree} />
      <Image src={enterfamilyname} />
      <Image src={dashboard} />
      <Image src={userupdate} />
      <Image src={familytree} />
      
      
      
       </div>


      </div>

    </>
  );
};

export default quickStart;
