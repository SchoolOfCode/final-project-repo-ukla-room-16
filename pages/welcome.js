import logofamilia from "../images/Familia9.png";
import Image from 'next/image';
import Link from "next/link";
import tree from "../images/tree.png";
import meal from "../images/meal.png";
import frontimage from "../images/familia_frontpage_image.jpg";
import styles from "../styles/Welcome.module.css";
import eventplanner from "../images/eventplanner.jpeg";
import peace from "../images/peace.jpeg";
import famrep from "../images/famrep.jpeg";

const WelcomePage = () => {
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
          <Link href="/quickstart" className={styles.info}>
             Quickstart
          </Link>
        </div>
        <div className={styles.infobox}>
          <Link href="#first-section" className={styles.info}><a>Security</a>
             
          </Link>
        </div>
</div>
        
       
        

        <div className={styles.familyimage}>
            <h1 >Bringing the Family 
            together in one app </h1>
            {/* <Image src={frontimage}
          alt="Picture of a family from grandparents, to children and grandchildren"
          width="150px"
          height="75px" /> */}
          </div>
<br></br>
<br></br>
            <div className={styles.container}>
            <div className={styles.leftcolumn}>

            <div className={styles.video}>
         <video controls src={"/familia-an-app-for-the-family.mp4"} 
         style={{ width: "400px", height:"400px" }} />
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
            <div id="first-seciton">SECTION 1</div>
            </div>            


      
    )
}

export default WelcomePage

