import React from 'react'; 
import { Col, Row } from 'react-bootstrap';
import courseCalendarVideo from "../assets/video/dummy-video.mp4";
import fullViewUserImg from "../assets/images/thumbnails/membership-student-img.png";
import yellowStarIcon from "../assets/images/icons/star-yellow-icon.svg";
import marketingArticeImg1 from "../assets/images/thumbnails/blog-marketing-article-img1.png";
import marketingArticeImg2 from "../assets/images/thumbnails/blog-marketing-article-img2.png";
import marketingArticeImg3 from "../assets/images/thumbnails/blog-marketing-article-img3.png"; 
import designGrayIcon from "../assets/images/icons/design-gray-icon.svg";
import clockGrayIcon from "../assets/images/icons/clock-gray-icon.svg";
import userIcon1 from "../assets/images/icons/user-icon1.svg";
import userIcon2 from "../assets/images/icons/user-icon2.svg";
import userIcon3 from "../assets/images/icons/user-icon3.svg";

const CourseCalendarView = () => {
  return (
    <div className="el_cc_main_inner_body">
        <div className="el_cc_full_view_video">
          <video width="600" controls>
              <source src={courseCalendarVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        <div className="el_cc_full_view_cont">
          <h5>Introduction to Adobe XD</h5>
          <p>Learn the basics of Adobe XD, including its interface, tools, and features. Understand how to create wireframes and design layouts efficiently for web and mobile applications.</p>
        </div>
        <div className="el_cc_full_view_cont">
          <h5>Who this course is for?</h5>
          <p>Beginners who want to start designing apps and websites with Adobe XD. People looking to understand wireframes, mockups, and interactive prototypes. Developers who want to improve their design skills for better collaboration with designers.</p>
        </div>
        <div className="el_cc_full_view_cont">
          <h5>Archievable</h5>
          <p>By the end of this course, you will gain proficiency in Adobe XD, enabling you to confidently create wireframes, layouts, and interactive prototypes. You will also develop the skills to build clickable prototypes that simulate real user experiences</p>
        </div>
        <div className="el_cc_full_view_user_card">
          <div className="el_cc_full_view_user_det">
            <div className="el_cc_full_view_user_img">
              <img src={fullViewUserImg} alt="user img" />
            </div>
            <div className="el_cc_full_view_user_rating">
              <h6>Bulkin Simons</h6>
              <div className="el_cc_full_view_user_stars">
                <span><img src={yellowStarIcon} alt="star icon" /></span>
                <span><img src={yellowStarIcon} alt="star icon" /></span>
                <span><img src={yellowStarIcon} alt="star icon" /></span>
                <span><img src={yellowStarIcon} alt="star icon" /></span>
                <span><img src={yellowStarIcon} alt="star icon" /></span>
              </div>
            </div>
          </div>
          <p>This course gave me a solid foundation in Adobe XD. The lessons were clear and practical, guiding me through wireframing, layout design, and creating interactive prototypes. I especially appreciated the hands-on exercises.</p>
        </div>
        {/* related blog */}
        <div className="el_cc_full_view_related_blog"> 
            <div className="el_blog_marketing_article_top">
                <h5>Student also bought</h5>
                <button className="el_btn el_link_btn">See All</button>
            </div>
            <Row>
                <Col lg={4} md={6}>
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
                <Col lg={4} md={6}>
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
                <Col lg={4} md={6}>
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
            </Row>
        </div>
    </div>
  )
}

export default CourseCalendarView;