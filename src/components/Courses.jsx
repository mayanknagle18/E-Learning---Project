import React from 'react'
import Slider from 'react-slick'; 
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import userIcon1 from "../assets/images/icons/user-icon1.svg";
import userIcon2 from "../assets/images/icons/user-icon2.svg";
import userIcon3 from "../assets/images/icons/user-icon3.svg"; 
import relatedBlogCardImg1 from "../assets/images/thumbnails/blog-related-img1.png";
import relatedBlogCardImg2 from "../assets/images/thumbnails/blog-related-img2.png";
import relatedBlogCardImg3 from "../assets/images/thumbnails/blog-related-img3.png"; 
import designIcon from "../assets/images/icons/design-icon.svg"; 
import developmentIcon from "../assets/images/icons/development-icon.svg"; 
import buisnessIcon from "../assets/images/icons/buisness-icon.svg"; 
import marketingIcon from "../assets/images/icons/marketing-icon.svg"; 
import accountingIcon from "../assets/images/icons/accounting-icon.svg"; 
import humanReourcesIcon from "../assets/images/icons/human-reources-icon.svg"; 
import seoIcon from "../assets/images/icons/seo-icon.svg"; 
import graphicsIcon from "../assets/images/icons/graphics-icon.svg";     
import marketingArticeImg1 from "../assets/images/thumbnails/blog-marketing-article-img1.png";
import marketingArticeImg2 from "../assets/images/thumbnails/blog-marketing-article-img2.png";
import marketingArticeImg3 from "../assets/images/thumbnails/blog-marketing-article-img3.png";
import marketingArticeImg4 from "../assets/images/thumbnails/blog-marketing-article-img4.png";
import designGrayIcon from "../assets/images/icons/design-gray-icon.svg";
import clockGrayIcon from "../assets/images/icons/clock-gray-icon.svg";

const Courses = () => {
    const relatedBlogCard = { 
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, 
        dots: false,  
        responsive: [
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        }, 
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }, 
        ]
    };
  return (
    <>
    {/* related blog */}
    <section className="el_blog_related_blog el_blog_related_courses">
    <div className="el_container">
        <div className="el_blog_related_blog_top">
        <h5>Welcome back, ready for your next lesson? </h5>
        <button className="el_btn el_link_btn">View hisotry</button>
        </div>
        <div className="el_blog_related_blog_wrap">
        <Slider {...relatedBlogCard} className="el_blog_slick_slider">
            <div className="el_blog_eb_card el_courses_eb_card">
                <div className="el_blog_eb_card_img">
                    <img src={relatedBlogCardImg1} alt="blog-related-img1" />
                </div>
                <div className="el_blog_eb_card_cont">
                    <h5>Class adds $30 million solution</h5>
                    <div className="el_blog_eb_userwrap">
                        <div className="el_blog_eb_userimg">
                            <img src={userIcon1} alt="user icon" />
                        </div>
                        <h6>Lina Smith</h6>
                    </div> 
                    <div className="el_courses_details">
                        <ProgressBar now={60} className="el_progress_bar"/>
                        <h6>Lesson 5 of 7</h6>
                    </div>
                </div>
            </div>
            <div className="el_blog_eb_card el_courses_eb_card">
                <div className="el_blog_eb_card_img">
                    <img src={relatedBlogCardImg2} alt="blog-related-img2" />
                </div>
                <div className="el_blog_eb_card_cont">
                    <h5>AI-Powered Learning Platforms</h5>
                    <div className="el_blog_eb_userwrap">
                        <div className="el_blog_eb_userimg">
                            <img src={userIcon2} alt="user icon" />
                        </div>
                        <h6>Daniel Carter</h6>
                    </div> 
                    <div className="el_courses_details">
                        <ProgressBar now={60} className="el_progress_bar"/>
                        <h6>Lesson 5 of 7</h6>
                    </div>
                </div>
            </div> 
            <div className="el_blog_eb_card el_courses_eb_card">
                <div className="el_blog_eb_card_img">
                    <img src={relatedBlogCardImg3} alt="blog-related-img2" />
                </div>
                <div className="el_blog_eb_card_cont">
                    <h5>How Interactive Video Courses</h5>
                    <div className="el_blog_eb_userwrap">
                        <div className="el_blog_eb_userimg">
                            <img src={userIcon3} alt="user icon" />
                        </div>
                        <h6>Olivia Bennett</h6>
                    </div> 
                    <div className="el_courses_details">
                        <ProgressBar now={60} className="el_progress_bar"/>
                        <h6>Lesson 5 of 7</h6>
                    </div>
                </div>
            </div> 
            <div className="el_blog_eb_card el_courses_eb_card">
                <div className="el_blog_eb_card_img">
                    <img src={relatedBlogCardImg3} alt="blog-related-img2" />
                </div>
                <div className="el_blog_eb_card_cont">
                    <h5>How Interactive Video Courses</h5>
                    <div className="el_blog_eb_userwrap">
                        <div className="el_blog_eb_userimg">
                            <img src={userIcon3} alt="user icon" />
                        </div>
                        <h6>Olivia Bennett</h6>
                    </div> 
                    <div className="el_courses_details">
                        <ProgressBar now={60} className="el_progress_bar"/>
                        <h6>Lesson 5 of 7</h6>
                    </div>
                </div>
            </div> 
        </Slider>
        </div>
    </div>
    </section>
    {/* choice favourite courses */}
    <section className="el_choice_favourite_courses">
        <div className="el_container">
            <h5>Choice favourite course from top category</h5>
            <div className="el_choice_favourite_courses_wrap">
                <div className="el_cfc_card">
                    <div className="el_cfc_card_img el_cfc_card_img1">
                        <img src={designIcon} alt="design icon" />
                    </div>
                    <h6>Design</h6>
                    <p>Explore creative design principles and tools to craft visually stunning and user-friendly experiences.</p>
                </div>
                <div className="el_cfc_card">
                    <div className="el_cfc_card_img el_cfc_card_img2">
                        <img src={developmentIcon} alt="development icon" />
                    </div>
                    <h6>Development</h6>
                    <p>Learn modern programming skills to build powerful, scalable websites and applications.</p>
                </div>
                <div className="el_cfc_card">
                    <div className="el_cfc_card_img el_cfc_card_img3">
                        <img src={buisnessIcon} alt="buisness icon" />
                    </div>
                    <h6>Business</h6>
                    <p>Gain practical knowledge to manage operations, strategy, and growth effectively.</p>
                </div>
                <div className="el_cfc_card">
                    <div className="el_cfc_card_img el_cfc_card_img4">
                        <img src={marketingIcon} alt="marketing icon" />
                    </div>
                    <h6>Marketing</h6>
                    <p>Master digital and traditional marketing techniques to attract, engage, and convert customers.</p>
                </div>
                <div className="el_cfc_card">
                    <div className="el_cfc_card_img el_cfc_card_img5">
                        <img src={accountingIcon} alt="accounting icon" />
                    </div>
                    <h6>Accounting</h6>
                    <p>Understand financial records, budgeting, and reporting to make smart business decisions.</p>
                </div>
                <div className="el_cfc_card">
                    <div className="el_cfc_card_img el_cfc_card_img6">
                        <img src={humanReourcesIcon} alt="human resources icon" />
                    </div>
                    <h6>Human Resources</h6>
                    <p>Develop skills to recruit, manage, and support talent within organizations.</p>
                </div>
                <div className="el_cfc_card">
                    <div className="el_cfc_card_img el_cfc_card_img7">
                        <img src={seoIcon} alt="seo icon" />
                    </div>
                    <h6>SEO</h6>
                    <p>Learn search engine optimization strategies to improve website visibility and organic traffic.</p>
                </div>
                <div className="el_cfc_card">
                    <div className="el_cfc_card_img el_cfc_card_img8">
                        <img src={graphicsIcon} alt="graphics icon" />
                    </div>
                    <h6>Graphics</h6>
                    <p>Create impactful visual content using industry-standard graphic design tools and techniques.</p>
                </div>
            </div>
        </div>
    </section>
    {/* related blog */}
    <section className="el_blog_marketing_article el_recommended_for_you">
        <div className="el_container">
            <div className="el_blog_marketing_article_top">
                <h5>Recommended for you </h5>
                <button className="el_btn el_link_btn">See All</button>
            </div>
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
            </Row>
        </div>
    </section>
    </>
  )
}

export default Courses;