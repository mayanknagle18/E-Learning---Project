import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import careerIcon1 from "../assets/images/icons/career-course-icon.svg";
import careerIcon2 from "../assets/images/icons/career-hire-icon.svg";
import careerIcon3 from "../assets/images/icons/career-learning-icon.svg";
import careerIcon4 from "../assets/images/icons/career-goal-icon.svg";
import careerBrushIcon from "../assets/images/icons/career-brush-icon.svg";
import careerDeveloperIcon from "../assets/images/icons/career-developer-icon.svg";
import careerHornIcon from "../assets/images/icons/career-horn-icon.svg";
import careerMechanicIcon from "../assets/images/icons/career-mechanic-icon.svg";
import careerPaintIcon from "../assets/images/icons/career-paint-icon.svg";
import carrerSettingIcon from "../assets/images/icons/career-setting-icon.svg";

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
        {/* careers open positions */}
        <section className="el_career_open_positions">
            <div className="el_container">
                <div className="el_cop_cont">
                    <h6>Open Positions</h6>
                    <h3>Find your place on the team</h3>
                </div>
                <div className="el_cop_tabs">
                    <Tab.Container defaultActiveKey="allroles"> 
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="allroles">All Roles</Nav.Link>
                            </Nav.Item> 
                            <Nav.Item>
                                <Nav.Link eventKey="engineering">Engineering</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="design">Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="content">Content</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="marketing">Marketing</Nav.Link>
                            </Nav.Item>
                        </Nav>  
                        <Tab.Content>
                            <Tab.Pane eventKey="allroles">
                                <ul>
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={careerMechanicIcon} alt="career mechanic icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Senior Frontend Engineer</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Remote</span>
                                                    <span>5+ years exp.</span>
                                                    <span>Engneering</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_remote">Remote</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li>
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={careerPaintIcon} alt="career paint icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Product Designer — Learning UX</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Bengaluru / Remote</span>
                                                    <span>3-5 years exp.</span>
                                                    <span>Design</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_hybrid">Hybrid</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li>
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={careerDeveloperIcon} alt="career developer icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Curriculum Developer — Tech Tracks</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Remote</span>
                                                    <span>2-4 years exp.</span>
                                                    <span>Content</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_remote">Remote</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li>
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={carrerSettingIcon} alt="career setting icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Backend Engineer — Infra & Scale</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Bengaluru</span>
                                                    <span>4+ years exp.</span>
                                                    <span>Engneering</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_onsite">Onsite</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li>
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={careerHornIcon} alt="career horn icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Growth Marketing Manager</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Remote</span>
                                                    <span>3+ years exp.</span>
                                                    <span>Marketing</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_remote">Remote</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li>
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={careerBrushIcon} alt="career brush icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Brand & Motion Designer</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Remote</span>
                                                    <span>2-3 years exp.</span>
                                                    <span>Design</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_hybrid">Hybrid</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li>
                                </ul>
                            </Tab.Pane> 
                            <Tab.Pane eventKey="engineering">
                                <ul>
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={careerMechanicIcon} alt="career mechanic icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Senior Frontend Engineer</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Remote</span>
                                                    <span>5+ years exp.</span>
                                                    <span>Engneering</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_remote">Remote</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li> 
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={carrerSettingIcon} alt="career setting icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Backend Engineer — Infra & Scale</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Bengaluru</span>
                                                    <span>4+ years exp.</span>
                                                    <span>Engneering</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_onsite">Onsite</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li> 
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="design">
                                <ul> 
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={careerPaintIcon} alt="career paint icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Product Designer — Learning UX</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Bengaluru / Remote</span>
                                                    <span>3-5 years exp.</span>
                                                    <span>Design</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_hybrid">Hybrid</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li>  
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={careerBrushIcon} alt="career brush icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Brand & Motion Designer</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Remote</span>
                                                    <span>2-3 years exp.</span>
                                                    <span>Design</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_hybrid">Hybrid</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="content">
                                <ul> 
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={careerDeveloperIcon} alt="career developer icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Curriculum Developer — Tech Tracks</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Remote</span>
                                                    <span>2-4 years exp.</span>
                                                    <span>Content</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_remote">Remote</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li> 
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="marketing">
                                <ul> 
                                    <li className="el_cop_card">
                                        <div className="el_cop_card_left">
                                            <div className="el_cop_card_img">
                                                <img src={careerHornIcon} alt="career horn icon" />
                                            </div>
                                            <div className="el_cop_card_det">
                                                <h6>Growth Marketing Manager</h6>
                                                <div className="el_cop_card_tags">
                                                    <span>Remote</span>
                                                    <span>3+ years exp.</span>
                                                    <span>Marketing</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="el_cop_card_right">
                                            <span className="el_cop_badge el_cop_badge_remote">Remote</span>
                                            <button className="el_btn el_primary_btn el_btn_rounded">Apply Now</button>
                                        </div>
                                    </li> 
                                </ul>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </section>
    </>
  )
}

export default Careers;