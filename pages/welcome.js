import Image from 'next/image';
import Link from "next/link";

import styles from "../styles/Welcome.module.css";
import style from "../styles/QuickStart.module.css";

import logofamilia from "../images/Familia9.png";
import tree from "../images/tree.png";
import eventplanner from "../images/eventplanner.jpeg";
import peace from "../images/peace.jpeg";
import famrep from "../images/famrep.jpeg";
import useapp from "../images/useapp.png";
import createtree from "../images/createtree.png";
import userupdate from  "../images/userupdate.png";
import dashboard from "../images/dashboard.png";
import familytree from "../images/familytree.png";
import enterfamilyname from "../images/enterfamilyname.png";
import teamukla from "../images/teamukla.png";




function WelcomePage () {
    return (
      <div className={styles.entire}>
      <div>
        <div>
        <div className={styles.rowtop}>
        <Link href="/"><a><Image
          src={logofamilia}
          alt="logo saying Familia, the name of our app"
          className={styles.logo} />
          </a></Link>
        <div className={styles.infobox}>
          <Link href="/" className={styles.info}>
             Home
          </Link>
        </div>
        <div className={styles.infobox}>
          <Link href="#quickstart" className={styles.info}>
             Quickstart
          </Link>
        </div>
        {/* <div className={styles.infobox}>
          <Link href="#first-section" className={styles.info}><a>Security</a>
             
          </Link>
        </div> */}

        <div className={styles.infobox}>
          <Link href="#AboutUs" className={styles.info}><a>About Us</a>
             
          </Link>
        </div>
</div>
        
       
        

        <div className={styles.familyimage}>
            <h1 >Bringing the Family 
            together in one app </h1>
          
          </div>
<br></br>
<br></br>
            <div className={styles.container}>
            <div className={styles.leftcolumn}>

            <div className={styles.video}>
         <video controls src={"/familia-an-app-for-the-family.mp4"} 
         style={{ width: "30vw", height:"400px" }} />
          </div>



            </div> 
        


            <div className={styles.middlecolumn}>
            <div className={styles.text}> <p>Familia is your family app, where you have a safe and secure space to discuss and share information with your close family only.
            
           <br></br>
           <br></br>
            Other social media platforms might feel heavy with too many options, too many people sharing too much you do not necessarily care about...
            <br></br>
            <br></br>
            With Familia, we want to bring the people you care about closer to you!
            <br></br>
            <br></br>
            How many times did you have to ask your daughter for the size of shoes of your grandson? Has your son ever asked you about the postal address of his sister? Do you never remember what your husband's blood group is? Ever asked your wife what is the birth date of your father-in-Law?
            <br></br>
            <br></br>
            Familia will centralise these snippets of information for you and for your close family to know.
            </p>
            </div>
            </div>
           </div>
<br></br>
           <div className={styles.secure}>
           {/* <Image insert image of posts or feed/> */}
           <p>
            The app also offers a secure place where you can exchange messages and pictures with all the family members. No need for various cloud platsform, exchanging pictures over Messenger and having to share that with people outside your family or inner circle.
            </p></div>
            </div>

            <div className={styles.rightcolumn}></div>
            
            <div className={styles.tree}>
            
            <Image src={tree} width="200px" height="200px" />
            
            <p>When we think about family trees... we also offer you the opportunity to visualise your family and grow your family tree with our innovative family tree display.</p>
            </div>
<br></br>
<br></br>
<p style={{fontSize: "25px", fontWeight: "bolder", color: "Red"}}>More to come!</p>        
            <div className={styles.more}>
                        
            <div classname={styles.recipe}>
            <Image src={famrep} width="100px" height="100px" />
            <p>Your Familia recipe book. One place to keep these precious family recipes</p>
            </div>

            <div className={styles.events}>
            <Image src={eventplanner} width="85px" height="90px"/>
            <p>The Familia events, with a calendar where you can plan and be reminded of important family events, gatherings, birthdays etc.</p>
            </div>
           
           <div className={styles.others}>
           <Image src={peace} width="250px" height="100px"/>
           <p>The familia family app will help you keep a peaceful mind, knowing where your children are any time 
           </p>
           </div>
            </div>
            </div>


{/* /////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////// */}




            <div className={style.container} id="quickstart">
  
  <div className={style.leftcolumn}>
  <Link href="/"><a><Image
        src={logofamilia}
        alt="logo saying Familia, the name of our app"
        className={style.logo} />
        </a></Link>
        </div>
        

  <div className={style.middlecolumn}>  


    <div className={style.row}>
        <div className={style.title}>How to use the Familia app</div>

      <Image src={useapp}
      alt="image of a handclick"
      className={style.imageuseapp}
      width="50px"        
      height="50px"/>
    </div>
    <div className={style.row}>
       


    </div>


    <div className={style.row}>
        <div className={style.column1}>
              <div className={style.login}>
              <em>Create your account:</em>
              <div className={style.registerbox}>
        <a href="/api/auth/login" className={style.register}>
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
          
          <div className={style.column2}> 
          <Image src={createtree} className={style.images} />
          <Image src={enterfamilyname} className={style.images}/>
          </div>
      </div> 
     
     <div className={style.row}>
      <div className={style.column1}>
     <div className={style.dashboard}>   
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
    <div className={style.column2}>
    <Image src={dashboard} className={style.images}/>
    </div>
    </div>

    <div className={style.row}>
      <div className={style.column1}>
    <div className={style.familytree}>   
    <p>With the <em>family tree</em> in Familia, you can:</p> 
    <p>- add family members</p>
    <p>- add information on each family member </p>
   
    </div>
</div>
<div className={style.column2}>
    <Image src={familytree} className={style.images} />
</div>
</div>

<div className={style.row}>
      <div className={style.column1}>
    <div className={style.user}>  
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

    <div className={style.column2}> 
    <Image src={userupdate} className={style.images}/>
</div>
</div>
  

    <div className={style.delete}>  
    If you no longer want to be a part of the family, you can always delete your profile
    and join a different family if you wish to do so...
    </div>

</div>
    <div className={style.rightcolumn}> </div>
   

</div>














{/* /////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////// */}



<div className={style.container} id="AboutUs">
  
  <div className={style.leftcolumn}>
  <Link href="/"><a><Image
        src={logofamilia}
        alt="logo saying Familia, the name of our app"
        className={style.logo} />
        </a></Link>
        </div>
        

  <div className={style.middlecolumn}>  


    <div className={style.row}>
        <div className={style.title}>About team UKLA</div>

    </div>
    <div className={style.row}>
       


    </div>

<div className={style.teamtext}>
                 <p>We are a group of software developers / engineers who have been growing our skills during the <Link href="https://www.schoolofcode.co.uk/"><a target="_blank" style={{fontWeight:"bold" }}>School Of Code</a></Link> Bootcamp taking place in 2021/22. </p>
                 <p>The team is composed of the following members:</p> </div>
    <div className={style.row}>
        <div className={style.column3}>
              <div className={style.intro}>
            
                 <p style={{fontWeight:"bold" }}>- Kevwe Olomu:</p><p> <Link href="https://github.com/kevweolomu"><a target="_blank">https://github.com/kevweolomu</a></Link></p>
                 <p style={{fontWeight:"bold" }}>- Lorcan McCullagh: </p><p><Link href="https://github.com/lorcanmc"><a target="_blank">https://github.com/lorcanmc</a></Link></p>
                 <p style={{fontWeight:"bold" }}>- Mariano Quiroga: </p><p><Link href="https://github.com/marianoeq"><a target="_blank">https://github.com/marianoeq</a></Link></p>
                 <p style={{fontWeight:"bold" }}>- Najma Diiriye:</p><p> <Link href="https://github.com/Najmadiiriye"><a target="_blank">https://github.com/Najmadiiriye</a></Link></p>
                 <p style={{fontWeight:"bold" }}>- Toni Saraiva:</p><p> <Link href="https://github.com/Tonisaraiva"><a target="_blank">https://github.com/Tonisaraiva</a></Link></p>
                 <p style={{fontWeight:"bold" }}>- Wahida Omar:</p><p> <Link href="https://github.com/wahidaomar"><a target="_blank">https://github.com/wahidaomar </a></Link></p>

              </div>
         </div>
          
          <div className={style.column3}> 
          <Image src={teamukla} className={style.images} />
      
          </div>
      </div> 
     <div className={style.teamtext}>
      
                <p>Team UKLA has been our little family for 4 weeks during the development of the Familia App</p>
                <p>The name originates form the fact that most of the team is based in the UK but for some time 2 members were digital nomads, one in Argentina and the other in Latvia</p>
                <p>An international team working across 5 time zones to deliver a functional App</p>
                <p>We went from ideation, through to planning, development and delivery of a functional App built using Nextjs and a PostgreSQL database following an Agile methodology.</p>
</div>
    

</div>
    <div className={style.rightcolumn}> </div>
   

</div>





            </div>            



    )
}

export default WelcomePage

