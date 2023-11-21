import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Contact Me</h2>

            <div className="contact-container bd-grid">
                <div className="contact-info">
                    <h3 className="contact-subtitle">PHONE</h3>
                    <span className="contact-text">+62 823 103 261 87</span>
                    <h3 className="contact-subtitle">EMAIL</h3>
                    <span className="contact-text">sablenkthea@gmail.com</span>
                </div>

                <form action="" className="contact-form">
                    <div className="contact-inputs">
                        <input type="text" id="name" placeholder="Name" className="contact-input"></input>
                        <input type="email" id="email" placeholder="Email" className="contact-input"></input>
                    </div>

                    <textarea name="pesan" id="pesan" cols="0" rows="10" className="contact-input" placeholder="Tuliskan Pesan Anda..."></textarea>

                    <input type="submit" value="Kirim" className="contact-button"></input>
                </form>
            </div>
        </section>
    );
}

export default Contact;
