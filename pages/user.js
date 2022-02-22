import Head from 'next/head';
import css from '../styles/user.module.css';
import Image from 'next/image';
import meal from '../images/meal.jpeg';
import profile from '../images/profile.jpeg';
import medicals from '../images/medicals.jpeg';


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
                <img src={medicals} alt="medical-info" />
                <h6> Blood type: o- </h6>
              
                <h6> Allergies: No allergies </h6>
            </div>

            <div className={css.clothesSize}>
                <img src="https://thumbs.dreamstime.com/b/clothes-logo-template-vector-icon-design-181127120.jpg" alt="clothes-size" />
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
                <img src="https://i.pinimg.com/550x/de/13/be/de13bedba8ab6783e2e460ff0e58e0a5.jpg" alt="shoe-size" />
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