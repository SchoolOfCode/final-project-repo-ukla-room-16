import React from 'react';
import logofamilia from "../images/Familia9.png";
import Image from 'next/image';
import tree from "../images/tree.png";
import meal from "../images/meal.png";
import frontimage from "../images/familia_frontpage_image.jpg";
import styles from "../styles/Welcome.module.css"

const WelcomePage = () => {
    return (
      <>
      <div>
        <div >
        <div>
        <Image src={logofamilia} width="100px" height="100px" />
        </div>

        <div className={styles.familyimage}>
            <h1 >Bringing the Familia 
            <br></br>together under one app</h1>
            <Image src={frontimage}
          alt="Picture of a family from grandparents, to children and grandchildren"
          width="150px"
          height="75px"/>
          </div>

            
            <div className={styles.container}>
            <div className={styles.leftcolumn}></div> 
            
            <div className={styles.middlecolumn}>
            <div className={styles.text}> Familia is your family app, where you have a safe and secure space to discuss and share information with your close family only.
            </div>

            <br></br>
            <br></br>
            <p>
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
           <div>
           {/* <Image insert image of posts or feed/> */}
           <p>
            The app also offers a secure place where you can exchange messages and pictures with all the family members. No need for various cloud platsform, exchanging pictures over Messenger and having to share that with people outside your family or inner circle.
            </p></div>
            </div>
            <div className={styles.rightcolumn}></div>
                        
            <div>
            <Image src={tree} width="400px" height="400px"/>
            <p>When we think about family trees... we also offer you the opportunity to visualise your family and grow your family tree with our innovative family tree display.</p>
            </div>

                    
            <div className="more">
            <p>More to come!</p>
            
            <div>
            <Image src={meal} width="85px" height="90px"/>
            <p>Your Familia recipe book. One place to keep these precious family recipes</p>
            </div>

            <div>
            {/* <Image insert an event logo or image/> */}
            <p>The Familia events, with a calendar where you can plan and be reminded of important family events, gatherings, birthdays etc.</p>
            </div>
           
           <div>
           {/* <Image insert image of peacful family/> */}
           <p>The familia family app will help you keep a peaceful mind, knowing where your children are any time 
           </p>
           </div>
            </div>
            </div>
            
      </>
    )
}

export default WelcomePage