import React from "react";
import profilePic from '../img/profile-pic.png'
import mail from '../img/Mail.png'
import linkedin from '../img/linkedin.png'

export default function Info() {
    return (
        <div className="card-info">
            <img src={profilePic} alt="" />
            <div className="infos">
                <h1>Laura Smith</h1>
                <h5 className="position">Frontend Developer</h5>
                <span>laurasmith.website</span>
            </div>
            <div className="buttons">
                <div className="button email"> <img src={mail} alt="" /> Email</div>
                <div className="button linkedin"><img src={linkedin} alt="" />Linkedin</div>
            </div>
        </div>
    )
}