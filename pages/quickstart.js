
import React from "react";
import styles from "../styles/QuickStart.module.css";
import Image from "next/image";
import Link from "next/link";
import logofamilia from "../images/Familia9.png";
import useapp from "../images/useapp.png";
import createtree from "../images/createtree.png";
import userupdate from  "../images/userupdate.png";
import dashboard from "../images/dashboard.png";
import familytree from "../images/familytree.png";
import enterfamilyname from "../images/enterfamilyname.png";

const quickStart = () => {
    return (
        <>

  <div className={styles.container}>
  
    <div className={styles.leftcolumn}>
    <Link href="/"><a><Image
          src={logofamilia}
          alt="logo saying Familia, the name of our app"
          className={styles.logo} />
          </a></Link>
          </div>
          

    <div className={styles.middlecolumn}>  


      <div className={styles.row}>
          <div className={styles.title}>How to use the Familia app</div>

        <Image src={useapp}
        alt="image of a handclick"
        className={styles.imageuseapp}
        width="50px"        
        height="50px"/>
      </div>
      <div className={styles.row}>
         


      </div>


      <div className={styles.row}>
          <div className={styles.column1}>
                <div className={styles.login}>
                <em>Create your account:</em>
                <div className={styles.registerbox}>
          <a href="/api/auth/login" className={styles.register}>
            Register
          </a>
        </div>
                   <p>- use your personal email or your Google accounts. </p>
                   <p>- you can then either join a family tree or create a family tree. </p>
                   <p>It is as simple as that. </p>
                <br></br>
        <br></br>
                  After joining or creating a family tree, you will be redirected to your dashboard
                  where you can view most of the features of the app.
                </div>
           </div>
            
            <div className={styles.column2}> 
            <Image src={createtree} className={styles.images} />
            <Image src={enterfamilyname} className={styles.images}/>
            </div>
        </div> 
       
       <div className={styles.row}>
        <div className={styles.column1}>
       <div className={styles.dashboard}>   
       On the <em>Dashboard</em>, you can:
       <p>- post messages and pictures, </p>
       <p>- view messages from other
      members of your family</p>
      <p>- like their posts </p> 
      <p>- view upcoming events and so much more.  </p>
      <br></br>
      This is fun, as you get to read messages from loved ones and keep up to date with birthdays, graduations, and
      anniversaries. 
      </div>
      </div>
      <div className={styles.column2}>
      <Image src={dashboard} className={styles.images}/>
      </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column1}>
      <div className={styles.familytree}>   
      <p>With the <em>family tree</em> in Familia, you can:</p> 
      <p>- add family members</p>
      <p>- add information on each family member </p>
     
      </div>
</div>
 <div className={styles.column2}>
      <Image src={familytree} className={styles.images} />
</div>
</div>

<div className={styles.row}>
        <div className={styles.column1}>
      <div className={styles.user}>  
      <p>At the top right-hand corner of the page,</p>
      <p>you
      have a profile picture which when clicked would take you to your own
      profile page where you can:</p>
      <p>-  view your information </p>
      <p>- update information like address,
      favourite food, clothes and shoe size... </p>
      <p>Clicking on the picture of any family member will show you a similar page,</p>
      <p> making your life easier when it comes to planning presents or getting in touch...</p>

      </div>
      </div>

      <div className={styles.column2}> 
      <Image src={userupdate} className={styles.images}/>
</div>
</div>
    

      <div className={styles.delete}>  
      If you no longer want to be a part of the family, you can always delete your profile
      and join a different family if you wish to do so...
      </div>

</div>
      <div className={styles.rightcolumn}> </div>
     

</div>

    </>
  );
};

export default quickStart;
