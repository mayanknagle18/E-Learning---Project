import React from 'react'
import { Col, Row } from 'react-bootstrap';
import userIcon1 from "../assets/images/icons/user-icon1.svg";
import userIcon2 from "../assets/images/icons/user-icon2.svg";
import userIcon3 from "../assets/images/icons/user-icon3.svg"; 
import designGrayIcon from "../assets/images/icons/design-gray-icon.svg";
import clockGrayIcon from "../assets/images/icons/clock-gray-icon.svg";
import creatorsImg1 from "../assets/images/thumbnails/creators-img1.png";
import creatorsImg2 from "../assets/images/thumbnails/creators-img2.png";
import creatorsImg3 from "../assets/images/thumbnails/creators-img3.png";
import creatorsImg4 from "../assets/images/thumbnails/creators-img4.png";
import creatorsImg5 from "../assets/images/thumbnails/creators-img5.png";
import creatorsImg6 from "../assets/images/thumbnails/creators-img6.png";
import marketingArticeImg1 from "../assets/images/thumbnails/blog-marketing-article-img1.png";
import marketingArticeImg2 from "../assets/images/thumbnails/blog-marketing-article-img2.png";
import marketingArticeImg3 from "../assets/images/thumbnails/blog-marketing-article-img3.png";
import marketingArticeImg4 from "../assets/images/thumbnails/blog-marketing-article-img4.png";
import marketingArticeImg5 from "../assets/images/thumbnails/blog-marketing-article-img5.png";
import marketingArticeImg6 from "../assets/images/thumbnails/blog-marketing-article-img6.png";
import marketingArticeImg7 from "../assets/images/thumbnails/blog-marketing-article-img7.png";
import marketingArticeImg8 from "../assets/images/thumbnails/blog-marketing-article-img8.png";
import knowAboutLearningImg from "../assets/images/thumbnails/know-about-learning-img.png";
import whatOurStudentSayImg from "../assets/images/thumbnails/what-our-student-say-img.png";
import twitterPrimaryIcon from "../assets/images/icons/twitter-primary-icon.svg";
import facebookPrimaryIcon from "../assets/images/icons/facebook-primary-icon.svg";
import instagramPrimaryIcon from "../assets/images/icons/instagram-primary-icon.svg";
import instructorCardImg1 from "../assets/images/thumbnails/instructor-card-img1.png";
import instructorCardImg2 from "../assets/images/thumbnails/instructor-card-img2.png";
import instructorCardImg3 from "../assets/images/thumbnails/instructor-card-img3.png";
import instructorCardImg4 from "../assets/images/thumbnails/instructor-card-img4.png";
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <>
        {/* search banner */}
        <section className="el_search_banner">
            <div className="el_container"> 
                <form action="" className="el_search_banner_form">
                    <div className="el_search_banner_search_card">
                        <input type="search" name="" id="" className="el_input" placeholder="Search your favourite course"/>
                        <button type="submit" className="el_btn el_primary_btn">Search</button>
                    </div>
                    <div className="el_search_banner_dropdown_wrap">
                        <div className="el_input_select">
                            <select name="" id="" className="el_input el_select">
                                <option value="">Subject 1</option>
                                <option value="">Subject 2</option>
                                <option value="">Subject 3</option>
                            </select>
                        </div>
                        <div className="el_input_select">
                            <select name="" id="" className="el_input el_select">
                                <option value="">Partner 1</option>
                                <option value="">Partner 2</option>
                                <option value="">Partner 3</option>
                            </select>
                        </div>
                        <div className="el_input_select">
                            <select name="" id="" className="el_input el_select">
                                <option value="">Program 1</option>
                                <option value="">Program 2</option>
                                <option value="">Program 3</option>
                            </select>
                        </div>
                        <div className="el_input_select">
                            <select name="" id="" className="el_input el_select">
                                <option value="">Language 1</option>
                                <option value="">Language 2</option>
                                <option value="">Language 3</option>
                            </select>
                        </div>
                        <div className="el_input_select">
                            <select name="" id="" className="el_input el_select">
                                <option value="">Abaliability 1</option>
                                <option value="">Abaliability 2</option>
                                <option value="">Abaliability 3</option>
                            </select>
                        </div>
                        <div className="el_input_select">
                            <select name="" id="" className="el_input el_select">
                                <option value="">Learning Type 1</option>
                                <option value="">Learning Type 2</option>
                                <option value="">Learning Type 3</option>
                            </select>
                        </div>
                    </div>
                </form>  
            </div>
        </section>
        {/* search recommended */}
        <section className="el_search_recommended">
            <div className="el_container"> 
                <Row className="el_blog_cus_row">
                    <Col className="el_blog_cus_col" lg={3} md={6}>
                        <div className="el_bma_card">
                        <div className="el_bma_card_top">
                            <div className="el_bma_card_img">
                                <img src={marketingArticeImg1} alt="marketing article img" />
                            </div>
                            <div className="el_bma_card_detail">
                            <div className="el_bma_card_datail_left">
                                <img src={designGrayIcon} alt="design gray icon" />
                                <span className="el_bma_card_datail_name">Design</span>
                            </div>
                            <div className="el_bma_card_datail_right">
                                <img src={clockGrayIcon} alt="clock gray icon" />
                                <span className="el_bma_card_datail_time">3 Month</span>
                            </div>
                            </div>
                            <h6>AWS Certified solutions Architect</h6>
                            <p>An AWS Certified Solutions Architect specializes in designing secure, scalable, and cost-efficient cloud solutions using Amazon Web Services.</p>
                        </div>
                        <div className="el_bma_card_bottom">
                            <div className="el_bma_card_bottom_left">
                            <img src={userIcon1} alt="user icon" />
                            <span className="el_bma_card_user">Lina Smith</span>
                            </div>
                            <div className="el_bma_card_bottom_right">
                            <span className="el_bma_card_mrp">$100</span>
                            <span className="el_bma_card_rp">$80</span>
                            </div>
                        </div>
                        </div>
                    </Col>
                    <Col className="el_blog_cus_col" lg={3} md={6}>
                        <div className="el_bma_card">
                        <div className="el_bma_card_top">
                            <div className="el_bma_card_img">
                            <img src={marketingArticeImg2} alt="marketing article img" />
                            </div>
                            <div className="el_bma_card_detail">
                            <div className="el_bma_card_datail_left">
                                <img src={designGrayIcon} alt="design gray icon" />
                                <span className="el_bma_card_datail_name">Marketing</span>
                            </div>
                            <div className="el_bma_card_datail_right">
                                <img src={clockGrayIcon} alt="clock gray icon" />
                                <span className="el_bma_card_datail_time">4 Month</span>
                            </div>
                            </div>
                            <h6>Digital Marketing Strategy Masterclass</h6>
                            <p>A comprehensive marketing course focused on brand growth, social media strategy, content planning, and performance analytics.</p>
                        </div>
                        <div className="el_bma_card_bottom">
                            <div className="el_bma_card_bottom_left">
                            <img src={userIcon2} alt="user icon" />
                            <span className="el_bma_card_user">Daniel Carter</span>
                            </div>
                            <div className="el_bma_card_bottom_right">
                            <span className="el_bma_card_mrp">$150</span>
                            <span className="el_bma_card_rp">$120</span>
                            </div>
                        </div>
                        </div>
                    </Col>
                    <Col className="el_blog_cus_col" lg={3} md={6}>
                        <div className="el_bma_card">
                        <div className="el_bma_card_top">
                            <div className="el_bma_card_img">
                            <img src={marketingArticeImg3} alt="marketing article img" />
                            </div>
                            <div className="el_bma_card_detail">
                            <div className="el_bma_card_datail_left">
                                <img src={designGrayIcon} alt="design gray icon" />
                                <span className="el_bma_card_datail_name">Buisness</span>
                            </div>
                            <div className="el_bma_card_datail_right">
                                <img src={clockGrayIcon} alt="clock gray icon" />
                                <span className="el_bma_card_datail_time">3 Month</span>
                            </div>
                            </div>
                            <h6>How Performance Marketing Strategies</h6>
                            <p>Performance marketing focuses on data-driven campaigns, targeted advertising, and conversion optimization to maximize ROI.</p>
                        </div>
                        <div className="el_bma_card_bottom">
                            <div className="el_bma_card_bottom_left">
                            <img src={userIcon3} alt="user icon" />
                            <span className="el_bma_card_user">Olivia Bennett</span>
                            </div>
                            <div className="el_bma_card_bottom_right">
                            <span className="el_bma_card_mrp">$120</span>
                            <span className="el_bma_card_rp">$100</span>
                            </div>
                        </div>
                        </div>
                    </Col>
                    <Col className="el_blog_cus_col" lg={3} md={6}>
                        <div className="el_bma_card">
                        <div className="el_bma_card_top">
                            <div className="el_bma_card_img">
                            <img src={marketingArticeImg4} alt="marketing article img" />
                            </div>
                            <div className="el_bma_card_detail">
                            <div className="el_bma_card_datail_left">
                                <img src={designGrayIcon} alt="design gray icon" />
                                <span className="el_bma_card_datail_name">Design</span>
                            </div>
                            <div className="el_bma_card_datail_right">
                                <img src={clockGrayIcon} alt="clock gray icon" />
                                <span className="el_bma_card_datail_time">3 Month</span>
                            </div>
                            </div>
                            <h6>The Power of Content Marketing</h6>
                            <p>Strategic content marketing builds audience trust, increases brand visibility, and nurtures long-term customer relationships.</p>
                        </div>
                        <div className="el_bma_card_bottom">
                            <div className="el_bma_card_bottom_left">
                            <img src={userIcon1} alt="user icon" />
                            <span className="el_bma_card_user">Lina Smith</span>
                            </div>
                            <div className="el_bma_card_bottom_right">
                            <span className="el_bma_card_mrp">$100</span>
                            <span className="el_bma_card_rp">$80</span>
                            </div>
                        </div>
                        </div>
                    </Col>
                    <Col className="el_blog_cus_col" lg={3} md={6}>
                        <div className="el_bma_card">
                        <div className="el_bma_card_top">
                            <div className="el_bma_card_img">
                                <img src={marketingArticeImg5} alt="marketing article img" />
                            </div>
                            <div className="el_bma_card_detail">
                            <div className="el_bma_card_datail_left">
                                <img src={designGrayIcon} alt="design gray icon" />
                                <span className="el_bma_card_datail_name">Cloud</span>
                            </div>
                            <div className="el_bma_card_datail_right">
                                <img src={clockGrayIcon} alt="clock gray icon" />
                                <span className="el_bma_card_datail_time">4 Month</span>
                            </div>
                            </div>
                            <h6>Cloud Security & DevOps Fundamentals</h6>
                            <p>Learn how to secure cloud infrastructure, implement CI/CD pipelines, and automate deployments using modern DevOps practices.</p>
                        </div>
                        <div className="el_bma_card_bottom">
                            <div className="el_bma_card_bottom_left">
                            <img src={userIcon1} alt="user icon" />
                            <span className="el_bma_card_user">Lina Smith</span>
                            </div>
                            <div className="el_bma_card_bottom_right">
                            <span className="el_bma_card_mrp">$100</span>
                            <span className="el_bma_card_rp">$80</span>
                            </div>
                        </div>
                        </div>
                    </Col>
                    <Col className="el_blog_cus_col" lg={3} md={6}>
                        <div className="el_bma_card">
                        <div className="el_bma_card_top">
                            <div className="el_bma_card_img">
                            <img src={marketingArticeImg6} alt="marketing article img" />
                            </div>
                            <div className="el_bma_card_detail">
                            <div className="el_bma_card_datail_left">
                                <img src={designGrayIcon} alt="design gray icon" />
                                <span className="el_bma_card_datail_name">UI/UX</span>
                            </div>
                            <div className="el_bma_card_datail_right">
                                <img src={clockGrayIcon} alt="clock gray icon" />
                                <span className="el_bma_card_datail_time">2 Month</span>
                            </div>
                            </div>
                            <h6>UI/UX Design Mastery</h6>
                            <p>A complete guide to designing user-friendly interfaces, improving user experience, and creating visually appealing digital products.</p>
                        </div>
                        <div className="el_bma_card_bottom">
                            <div className="el_bma_card_bottom_left">
                            <img src={userIcon2} alt="user icon" />
                            <span className="el_bma_card_user">Daniel Carter</span>
                            </div>
                            <div className="el_bma_card_bottom_right">
                            <span className="el_bma_card_mrp">$150</span>
                            <span className="el_bma_card_rp">$120</span>
                            </div>
                        </div>
                        </div>
                    </Col>
                    <Col className="el_blog_cus_col" lg={3} md={6}>
                        <div className="el_bma_card">
                        <div className="el_bma_card_top">
                            <div className="el_bma_card_img">
                            <img src={marketingArticeImg7} alt="marketing article img" />
                            </div>
                            <div className="el_bma_card_detail">
                            <div className="el_bma_card_datail_left">
                                <img src={designGrayIcon} alt="design gray icon" />
                                <span className="el_bma_card_datail_name">Data Analytics</span>
                            </div>
                            <div className="el_bma_card_datail_right">
                                <img src={clockGrayIcon} alt="clock gray icon" />
                                <span className="el_bma_card_datail_time">3 Month</span>
                            </div>
                            </div>
                            <h6>Data Analytics & Business Intelligence</h6>
                            <p>Understand how to analyze data, create dashboards, and make data-driven decisions using tools like Power BI and Excel.</p>
                        </div>
                        <div className="el_bma_card_bottom">
                            <div className="el_bma_card_bottom_left">
                            <img src={userIcon3} alt="user icon" />
                            <span className="el_bma_card_user">Olivia Bennett</span>
                            </div>
                            <div className="el_bma_card_bottom_right">
                            <span className="el_bma_card_mrp">$120</span>
                            <span className="el_bma_card_rp">$100</span>
                            </div>
                        </div>
                        </div>
                    </Col>
                    <Col className="el_blog_cus_col" lg={3} md={6}>
                        <div className="el_bma_card">
                        <div className="el_bma_card_top">
                            <div className="el_bma_card_img">
                            <img src={marketingArticeImg8} alt="marketing article img" />
                            </div>
                            <div className="el_bma_card_detail">
                            <div className="el_bma_card_datail_left">
                                <img src={designGrayIcon} alt="design gray icon" />
                                <span className="el_bma_card_datail_name">Entrepreneurship</span>
                            </div>
                            <div className="el_bma_card_datail_right">
                                <img src={clockGrayIcon} alt="clock gray icon" />
                                <span className="el_bma_card_datail_time">4 Month</span>
                            </div>
                            </div>
                            <h6>Startup & Entrepreneurship Bootcamp</h6>
                            <p>Learn how to build, launch, and scale a startup, including idea validation, funding strategies, and business growth models.</p>
                        </div>
                        <div className="el_bma_card_bottom">
                            <div className="el_bma_card_bottom_left">
                            <img src={userIcon1} alt="user icon" />
                            <span className="el_bma_card_user">Lina Smith</span>
                            </div>
                            <div className="el_bma_card_bottom_right">
                            <span className="el_bma_card_mrp">$100</span>
                            <span className="el_bma_card_rp">$80</span>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
        {/* know about your learning */}
        <section className="el_know_about_learning">
            <div className="el_container">
                <div className="el_know_about_learning_wrap">
                    <div className="el_kal_main">
                        <div className="el_kal_left">
                            <h5>Know about your learning platform</h5>
                            <ul>
                                <li>Free E-book, video & consolation</li>
                                <li>Top instructors from around world</li>
                                <li>Top courses from your team</li>
                            </ul>
                            <button className="el_btn el_primary_btn">Start learning now</button>
                        </div>
                        <div className="el_kal_img">
                            <img src={knowAboutLearningImg} alt="know about your learning img" />
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        {/* classes taught by creators */}
        <section className="el_classes_taught_by_creators">
            <div className="el_container">
                <div className="el_ctbc_main">
                    <div className="el_ctbc_top">
                        <h5>Classes taught by real creators</h5>
                        <button className="el_btn el_link_btn">See All</button>
                    </div>
                    <div className="el_ctbc_bottom">
                        <Row className="el_ctbc_row">
                            <Col lg={4} md={6} className="el_ctbc_col">
                                <div className="el_ctbc_card">
                                    <div className="el_ctbc_card_img">
                                        <img src={creatorsImg1} alt="classes taught by creators img" />
                                    </div>
                                    <div className="el_ctbc_card_detail">
                                        <h6>Jane Cooper</h6>
                                        <p>Senior Instructor</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="el_ctbc_col">
                                <div className="el_ctbc_card">
                                    <div className="el_ctbc_card_img">
                                        <img src={creatorsImg2} alt="classes taught by creators img" />
                                    </div>
                                    <div className="el_ctbc_card_detail">
                                        <h6>Adam</h6>
                                        <p>Junior Instructor</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="el_ctbc_col">
                                <div className="el_ctbc_card">
                                    <div className="el_ctbc_card_img">
                                        <img src={creatorsImg3} alt="classes taught by creators img" />
                                    </div>
                                    <div className="el_ctbc_card_detail">
                                        <h6>Tomara</h6>
                                        <p>Team Instructor</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="el_ctbc_col">
                                <div className="el_ctbc_card">
                                    <div className="el_ctbc_card_img">
                                        <img src={creatorsImg4} alt="classes taught by creators img" />
                                    </div>
                                    <div className="el_ctbc_card_detail">
                                        <h6>Ben</h6>
                                        <p>Administrator</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="el_ctbc_col">
                                <div className="el_ctbc_card">
                                    <div className="el_ctbc_card_img">
                                        <img src={creatorsImg5} alt="classes taught by creators img" />
                                    </div>
                                    <div className="el_ctbc_card_detail">
                                        <h6>Harley</h6>
                                        <p>Tutor</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="el_ctbc_col">
                                <div className="el_ctbc_card">
                                    <div className="el_ctbc_card_img">
                                        <img src={creatorsImg6} alt="classes taught by creators img" />
                                    </div>
                                    <div className="el_ctbc_card_detail">
                                        <h6>Marrie</h6>
                                        <p>Manager</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </section>
        {/* what our students say */}
        <section className="el_what_our_students_say">
            <div className="el_container">
                <h5>What our students have to say</h5>
                <div className="el_woss_main">
                    <div className="el_woss_card">
                        <div className="el_woss_card_img">
                            <img src={whatOurStudentSayImg} alt="what our student say img" />
                        </div>
                        <div className="el_woss_card_cont">
                            <h5>Savannah Nguyen</h5>
                            <h6>savannah.nguyen@gmail.com</h6>
                            <p>“I am extremely satisfied with the course content and the instructors. The platform is user-friendly, and I have learned so much in a short period of time. I highly recommend it to anyone looking to enhance their skills.”</p>
                            <ul>
                                <li>
                                    <Link to="#" className="el_woss_social_icon">
                                        <img src={twitterPrimaryIcon} alt="Twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="el_woss_social_icon">
                                        <img src={facebookPrimaryIcon} alt="Facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="el_woss_social_icon">
                                        <img src={instagramPrimaryIcon} alt="Instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </div> 
                    </div>
                    <div className="el_woss_instructors">
                        <div className="el_woss_instructor_card">
                            <img src={instructorCardImg1} alt="instructor card img" />
                        </div>
                        <div className="el_woss_instructor_card">
                            <img src={instructorCardImg2} alt="instructor card img" />
                        </div>
                        <div className="el_woss_instructor_card">
                            <img src={instructorCardImg3} alt="instructor card img" />
                        </div>
                        <div className="el_woss_instructor_card">
                            <img src={instructorCardImg4} alt="instructor card img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* top education offers and deals */}
        <section className="el_course_detail_top_education el_woss_course_detail">
            <div className="el_container">
                <div className="el_course_detail_te_top">
                    <h5>Top  Education offers and deals are listed here</h5>
                    <button className="el_btn el_link_btn">See All</button>
                </div>
                <div className="el_course_detail_te_bottom">
                    <Row className="el_course_detail_te_row">
                        <Col md={4} className="el_course_detail_te_col">
                            <div className="el_course_detail_te_card el_course_detail_te_card1">
                                <div className="el_course_detail_te_dis el_course_detail_te_green">
                                <h6>50%</h6>
                                </div>
                                <h5>for instructors</h5>
                                <p>TOTC's school management software helps traditional and online schools manage scheduling</p>
                            </div>
                        </Col>
                        <Col md={4} className="el_course_detail_te_col">
                            <div className="el_course_detail_te_card el_course_detail_te_card2">
                                <div className="el_course_detail_te_dis el_course_detail_te_green">
                                <h6>50%</h6>
                                </div>
                                <h5>for instructors</h5>
                                <p>TOTC's school management software helps traditional and online schools manage scheduling</p>
                            </div>
                        </Col>
                        <Col md={4} className="el_course_detail_te_col">
                            <div className="el_course_detail_te_card el_course_detail_te_card3">
                                <div className="el_course_detail_te_dis el_course_detail_te_green">
                                <h6>50%</h6>
                                </div>
                                <h5>for instructors</h5>
                                <p>TOTC's school management software helps traditional and online schools manage scheduling</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    </>
  )
}

export default Search;