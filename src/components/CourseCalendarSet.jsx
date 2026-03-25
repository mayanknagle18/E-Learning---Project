import React from 'react';
import { Link } from 'react-router-dom';
import twitterPrimaryIcon from "../assets/images/icons/twitter-primary-icon.svg";
import facebookPrimaryIcon from "../assets/images/icons/facebook-primary-icon.svg";
import youtubePrimaryIcon from "../assets/images/icons/youtube-primary-icon.svg";
import instagramPrimaryIcon from "../assets/images/icons/instagram-primary-icon.svg";
import telegramPrimaryIcon from "../assets/images/icons/telegram-primary-icon.svg";
import whatsappPrimaryIcon from "../assets/images/icons/whatsapp-primary-icon.svg";

const CourseCalendarSet = () => {
  return (
    <div className="el_cc_main_inner_body">
        <h5>Share and Refer</h5>
        <p>The Course Calendar offers a clear and organized view of all upcoming classes, sessions, and key academic activities. It helps both students and instructors stay informed about schedules, monitor their progress, and keep track of assignments and important deadlines. Designed with an easy-to-use layout and interactive elements, it makes planning simple and ensures a smooth, well-managed learning experience.</p>
        <div className="el_cc_create_calendar_set">
            <div className="el_cc_calendar_set_card el_cc_calendar_sc_blue">
                <div className="el_cc_calendar_set_top">
                    <h5>Introduction to Adobe XD</h5>
                    <ul>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={twitterPrimaryIcon} alt="twitter icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={facebookPrimaryIcon} alt="facebook icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={youtubePrimaryIcon} alt="youtube icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={instagramPrimaryIcon} alt="instagram icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={telegramPrimaryIcon} alt="telegram icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={whatsappPrimaryIcon} alt="whatsapp icon" />
                            </Link>
                        </li>
                    </ul> 
                </div>
                <h6>Get Started with UI/UX Design</h6>
                <div className="el_cc_set_para_wrap">
                    <p>Learn the basics of Adobe XD, including its interface, tools, and features. Understand how to create wireframes and design layouts efficiently for web and mobile applications.</p>
                </div>
            </div>
            <div className="el_cc_calendar_set_card el_cc_calendar_sc_orange">
                <div className="el_cc_calendar_set_top">
                    <h5>Designing Interactive Prototypes</h5>
                    <ul>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={twitterPrimaryIcon} alt="twitter icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={facebookPrimaryIcon} alt="facebook icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={youtubePrimaryIcon} alt="youtube icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={instagramPrimaryIcon} alt="instagram icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={telegramPrimaryIcon} alt="telegram icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={whatsappPrimaryIcon} alt="whatsapp icon" />
                            </Link>
                        </li>
                    </ul> 
                </div>
                <h6>Bring Your Designs to Life</h6>
                <div className="el_cc_set_para_wrap">
                    <p>Explore how to turn static designs into interactive prototypes using Adobe XD. Learn to add transitions, animations, and user flows to simulate real user experiences.</p>
                </div>
            </div>
            <div className="el_cc_calendar_set_card el_cc_calendar_sc_redlight">
                <div className="el_cc_calendar_set_top">
                    <h5>Sharing & Collaboration</h5>
                    <ul>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={twitterPrimaryIcon} alt="twitter icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={facebookPrimaryIcon} alt="facebook icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={youtubePrimaryIcon} alt="youtube icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={instagramPrimaryIcon} alt="instagram icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={telegramPrimaryIcon} alt="telegram icon" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="el_cc_set_link">
                                <img src={whatsappPrimaryIcon} alt="whatsapp icon" />
                            </Link>
                        </li>
                    </ul> 
                </div>
                <h6>Work Smarter with Teams</h6>
                <div className="el_cc_set_para_wrap">
                    <p>Discover how to share your designs and prototypes with team members and clients. Learn collaboration features like commenting, feedback, and real-time updates to improve your workflow.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCalendarSet