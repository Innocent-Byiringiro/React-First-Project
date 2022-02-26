
import Image from './logo_photo.jpg';

function Top(){
    return(
       <div className="top-holder">
            <p>
                <p>Curriculum Vitae</p>
                <h2>Innocent Byiringiro</h2>
                <h3>Junior Developer</h3>
            </p>
            <p>
                <img src={Image} alt="profile Image"></img>
            </p>
       </div>
    )
}

export default Top;