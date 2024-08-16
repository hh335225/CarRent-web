import React from "react";
import './footer.scss';
import { ReactComponent as Logo } from '../../../assets/logo.svg';


const Footer = () => {
    return (
        <section className="footer wrap">
            <div className="footer-top wrap">
                <div className="footer-message">
                    <Logo />
                    <span className="message">Our vision is to provide convenience and help increase your sales business.</span>
                </div>
                <div className="footer-info wrap">
                    <div id="about">
                        <label className="title">About</label>
                        <ul>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Featured</a></li>
                            <li><a href="#">Partnership</a></li>
                            <li><a href="#">Bussiness Relation</a></li>
                        </ul>
                    </div>
                    <div id="community">
                        <label className="title">Community</label>
                        <ul>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Podcast</a></li>
                            <li><a href="#">Invite a friend</a></li>
                        </ul>
                    </div>
                    <div id="socials">
                        <label className="title">Socials</label>
                        <ul>
                            <li><a href="#">Discord</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom wrap">
                <span className="copyright">
                    ©2022 MORENT. All rights reserved.
                </span>
                <div className="terms-and-policies wrap">
                    <a href="#">Privacy & Policy</a>
                    <a href="#">Terms & Condition</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;