import Head from 'next/head';
import css from '../styles/user.module.css';
import Image from 'next/image';
import meal from '../images/meal.jpeg';
import profile from '../images/profile.jpeg';
import medicals from '../images/medicals.jpeg';
import clothes from '../images/clothes.jpeg';
import shoes from '../images/shoes-icon.jpeg'



export default function User(){
    return (
        <div className={css.container}>
            <div className={css.profile}>
                <Image src={profile} alt="user-profile" width="100px" height="100"/>
                <h1> Username </h1>
                <h2> Dob </h2>
                <p> email address </p>
                <p> mobile number </p>
                <p> home address </p>
            </div>
<div className={css.info}>
            <div className={css.favouriteFood}>
                <Image src={meal} alt="favourite-meal" width="100px" height="100"/>
                <h6> Favourite Food: </h6>
                {/* <ul>
                    <li>

                    </li>
                </ul> */}
            </div>

            <div className={css.medicals}>
                <Image src={medicals} alt="medical-info"  width="100px" height="100"/>
                <h6> Blood type: o- </h6>
              
                <h6> Allergies: No allergies </h6>
            </div>

            <div className={css.clothesSize}>
                <Image src={clothes} alt="clothes-size"  width="100px" height="100" />
                <h6> Clothes size </h6>
                <p>
                    <ul>
                        <li>
                            Upperbody: Medium 
                        </li>
                        <li>
                            Lower-body: 33
                        </li>
                    </ul>

                </p>
            </div>

            <div className={css.shoeSize}>
                <Image src={shoes} alt="shoe-size" width="100px" height="100"/>
               <h6> Shoe size </h6>
                <p>
                    <ul>
                        <li> uk: 6 </li> 
                        <li> us: 5 </li>
                        <li> ue: 28cm </li>

                    </ul>
                </p>
            </div>
        </div>
  </div>  )
}