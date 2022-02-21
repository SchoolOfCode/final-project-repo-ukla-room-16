import Head from 'next/head';
import Css from '../styles/user.module.css';

export default function User(){
    return (
        <div className="user-container">
            <div className="profile">
                <img src="https://www.pngitem.com/pimgs/m/90-906935_animated-faces-my-hero-design-clip-art-woman.png" alt="user-profile-picure" />
                <h1> Username </h1>
                <h1> Dob </h1>
                <p> email address </p>
                <p> mobile number </p>
                <p> home address </p>
            </div>

            <div className="favourite-food">
                <img src="https://ak.picdn.net/shutterstock/videos/1085657018/thumb/11.jpg?ip=x480" />
                <h6> Favourite Food: </h6>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>

            <div className="medicals">
                <img src="https://media.istockphoto.com/vectors/medic-stethoscope-concept-logotype-template-design-business-logo-icon-vector-id1200712144?k=20&m=1200712144&s=612x612&w=0&h=sNMhJLCryisznj072aZ2TeSDSi90w3PJ8NuUR8ErxaM=" alt="medical-info" />
                <h6> Blood type: o- </h6>
                <h6> Allergies: No allergies </h6>
            </div>

            <div className="clothes-sizes">
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

            <div className="shoe-size">
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
    )
}