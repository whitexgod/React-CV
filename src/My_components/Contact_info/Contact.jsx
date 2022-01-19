import "./Contact.css"
import React from 'react'
import contact from "../Images/contact.gif"
import Footer from "../Footer/Footer"

export default function Contact() {
    return (
        <div className="Contact-Page">
            <div className="Banner">
             <img className="Contact-page-banner" src={contact} alt="contact gif"></img>
             </div>
             <div className="contact-info">
                <div className="card">
                <i class="card-icon fas fa-address-book"></i>
                    <p>+91 7003990436</p>
                </div>
                <div className="card">
                <i class="card-icon fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/tuhin-mukherjee-38376219b/" target="_blank">Linkedin</a>
                </div>
                <div className="card">
                <i class="card-icon fab fa-github-square"></i>
                    <a href="https://github.com/whitexgod" target="_blank">Github</a>
                </div>
                <div className="card">
                <i class="card-icon fas fa-envelope-open-text"></i>
                    <p>Email : tuhinmukherjee744@gmail.com</p>
                </div>
             </div>
             <Footer className="Foot" /> 
        </div>
    )
}
