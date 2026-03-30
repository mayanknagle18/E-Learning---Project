import React from 'react';
import { Col, Row } from 'react-bootstrap';
import careerIcon1 from "../assets/images/icons/career-course-icon.svg";
import careerIcon2 from "../assets/images/icons/career-hire-icon.svg";
import careerIcon3 from "../assets/images/icons/career-learning-icon.svg";
import careerIcon4 from "../assets/images/icons/career-goal-icon.svg";

const Careers = () => {
  return (
    <>
        {/* career banner */}
        <section className="el_career_banner">
            <div className="el_container">
                <div className="el_career_banner_wrap">
                    <div className="el_career_banner_left">
                        <h3>Join Our Mission to Transform Learning</h3>
                        <p>Help us build the platform where millions of people grow their skills, find mentors, and shape the future of education — from anywhere in the world.</p>
                        <div className="el_career_btn">
                            <button className="el_btn el_primary_btn el_btn_rounded">View Open Positions</button>
                        </div>
                        <div className="el_careers_rates">
                            <div className="el_careers_rate">
                                <h5>140+</h5>
                                <h6>Team Members</h6>
                            </div>
                            <div className="el_careers_rate">
                                <h5>18</h5>
                                <h6>Countries</h6>
                            </div>
                            <div className="el_careers_rate">
                                <h5>2M+</h5>
                                <h6>Learners Served</h6>
                            </div>
                        </div>
                    </div>
                    <div className="el_career_banner_right">
                        <ul className="el_cb_course_wrap">
                            <li>
                                <div className="el_cb_course_img">
                                    <img src={careerIcon1} alt="career icon" />
                                </div>
                                <div className="el_cb_course_cont">
                                    <h5>Course Launched</h5>
                                    <h6>Advanced React Patterns · 12k enrolled</h6>
                                </div>
                            </li>
                            <li>
                                <div className="el_cb_course_img">
                                    <img src={careerIcon2} alt="career icon" />
                                </div>
                                <div className="el_cb_course_cont">
                                    <h5>Course Launched</h5>
                                    <h6>Advanced React Patterns · 12k enrolled</h6>
                                </div>
                            </li>
                            <li>
                                <div className="el_cb_course_img">
                                    <img src={careerIcon3} alt="career icon" />
                                </div>
                                <div className="el_cb_course_cont">
                                    <h5>Course Launched</h5>
                                    <h6>Advanced React Patterns · 12k enrolled</h6>
                                </div>
                            </li>
                            <li>
                                <div className="el_cb_course_img">
                                    <img src={careerIcon4} alt="career icon" />
                                </div>
                                <div className="el_cb_course_cont">
                                    <h5>Course Launched</h5>
                                    <h6>Advanced React Patterns · 12k enrolled</h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* why learn sphere */}
        <section className="el_why_learn_sphere">
            <div className="el_container">
                <div className="el_why_learn_sphere_cont">
                    <h6>Why Learnsphere</h6>
                    <h3>Built for people who never stop growing</h3>
                    <p>We practice what we teach — investing seriously in our team's development, wellbeing, and joy at work.</p>
                </div>
                <div className="el_why_learn_sphere_wrap">
                    <Row>
                        <Col lg={3} md={6}>
                            <div className="el_wls_card"> 
                                <div className="el_wls_card_cont">
                                    <h5>Growth Opportunities</h5>
                                    <p>Structured career ladders, bi-annual reviews, and internal mobility. You're not stuck — you're building toward something real.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="el_wls_card"> 
                                <div className="el_wls_card_cont">
                                    <h5>Flexible Work</h5>
                                    <p>Async-first culture with remote-friendly hours. We care about the output, not the clock. Work where you think best.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="el_wls_card"> 
                                <div className="el_wls_card_cont">
                                    <h5>Learning Budget</h5>
                                    <p>$1,200/year for conferences, courses, books, and workshops — no receipts battle needed. You choose, we fund.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="el_wls_card"> 
                                <div className="el_wls_card_cont">
                                    <h5>Friendly Culture</h5>
                                    <p>No politics, no silos. Radical candor, transparent leadership, team offsites, and a culture of genuine care.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    </>
  )
}

export default Careers;