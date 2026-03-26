import React from 'react';
import Slider from 'react-slick';
import { Col, Row } from 'react-bootstrap';
import blogBannerImg from "../assets/images/thumbnails/blog-banner-img.png";
import userIcon1 from "../assets/images/icons/user-icon1.svg";
import userIcon2 from "../assets/images/icons/user-icon2.svg";
import userIcon3 from "../assets/images/icons/user-icon3.svg";
import blogCardImg1 from "../assets/images/thumbnails/blog-card-img1.png";
import blogCardImg2 from "../assets/images/thumbnails/blog-card-img2.png";
import blogCardImg3 from "../assets/images/thumbnails/blog-card-img3.png";
import blogCardImg4 from "../assets/images/thumbnails/blog-card-img4.png";
import relatedBlogCardImg1 from "../assets/images/thumbnails/blog-related-img1.png";
import relatedBlogCardImg2 from "../assets/images/thumbnails/blog-related-img2.png";
import relatedBlogCardImg3 from "../assets/images/thumbnails/blog-related-img3.png";
import primaryEyeIcon from "../assets/images/icons/primary-eye-icon.svg";
import marketingArticeImg1 from "../assets/images/thumbnails/blog-marketing-article-img1.png";
import marketingArticeImg2 from "../assets/images/thumbnails/blog-marketing-article-img2.png";
import marketingArticeImg3 from "../assets/images/thumbnails/blog-marketing-article-img3.png";
import marketingArticeImg4 from "../assets/images/thumbnails/blog-marketing-article-img4.png";
import designGrayIcon from "../assets/images/icons/design-gray-icon.svg";
import clockGrayIcon from "../assets/images/icons/clock-gray-icon.svg";

const Blog = () => {

  const relatedBlogCard = { 
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1, 
    dots: false,  
    responsive: [
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
      {/* blog banner */}
      <section className="el_blog_banner">
        <div className="el_container">
          <div className="el_blog_banner_wrap">
            <div className="el_blog_banner_left">
              <h6>By Themadbrains in <span className="el_blog_highlight">inspiration</span></h6>
              <h3>Why Swift UI Should Be on the Radar of Every Mobile Developer</h3>
              <p>SwiftUI is Apple's modern framework for building user interfaces across iOS, macOS, watchOS, and tvOS. It offers a declarative syntax, allowing developers to describe how their UI should look and behave, rather than managing complex state and layout manually.</p>
              <div className="el_blog_banner_btn">
                <button className="el_btn el_primary_btn">Start Learning Now</button>
              </div>
            </div>
            <div className="el_blog_banner_right">
              <div className="el_blog_banner_img">
                <img src={blogBannerImg} alt="blog banner img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* reading blog list */}
      <section className="el_blog_reading_list">
        <div className="el_container">
          <div className="el_blog_rl_wrap">
            <h5>Reading blog list</h5>
            <Row className="el_blog_cus_row">
              <Col lg={3} md={6} className="el_blog_cus_col">
                <div className="el_blog_rl_card">
                  <div className="el_blog_rl_card_img">
                    <img src={blogCardImg1} alt="blog card img 1" />
                  </div>
                  <div className="el_blog_rl_card_badge">
                    <h6>UI/UX</h6>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} className="el_blog_cus_col">
                <div className="el_blog_rl_card">
                  <div className="el_blog_rl_card_img">
                    <img src={blogCardImg2} alt="blog card img 2" />
                  </div>
                  <div className="el_blog_rl_card_badge">
                    <h6>React</h6>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} className="el_blog_cus_col">
                <div className="el_blog_rl_card">
                  <div className="el_blog_rl_card_img">
                    <img src={blogCardImg3} alt="blog card img 3" />
                  </div>
                  <div className="el_blog_rl_card_badge">
                    <h6>Node</h6>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} className="el_blog_cus_col">
                <div className="el_blog_rl_card">
                  <div className="el_blog_rl_card_img">
                    <img src={blogCardImg4} alt="blog card img 4" />
                  </div>
                  <div className="el_blog_rl_card_badge">
                    <h6>React Native</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      {/* related blog */}
      <section className="el_blog_related_blog">
        <div className="el_container">
          <div className="el_blog_related_blog_top">
            <h5>Related Blog </h5>
            <button className="el_btn el_link_btn">See All</button>
          </div>
          <div className="el_blog_related_blog_wrap">
            <Slider {...relatedBlogCard} className="el_blog_slick_slider">
              <div className="el_blog_eb_card">
                <div className="el_blog_eb_card_img">
                  <img src={relatedBlogCardImg1} alt="blog-related-img1" />
                </div>
                <div className="el_blog_eb_card_cont">
                  <h5>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h5>
                  <div className="el_blog_eb_userwrap">
                    <div className="el_blog_eb_userimg">
                      <img src={userIcon1} alt="user icon" />
                    </div>
                    <h6>Lina Smith</h6>
                  </div>
                  <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                  <div className="el_blog_eb_user_details">
                    <button className="el_btn el_link_more">Read more</button>
                    <p>
                      <span className="el_blog_eye_icon">
                        <img src={primaryEyeIcon} alt="primary eye icon" />
                      </span>
                      251,232
                    </p>
                  </div>
                </div>
              </div>
              <div className="el_blog_eb_card">
                <div className="el_blog_eb_card_img">
                  <img src={relatedBlogCardImg2} alt="blog-related-img2" />
                </div>
                <div className="el_blog_eb_card_cont">
                  <h5>AI-Powered Learning Platforms Are Transforming Digital Education for Modern Students</h5>
                  <div className="el_blog_eb_userwrap">
                    <div className="el_blog_eb_userimg">
                      <img src={userIcon2} alt="user icon" />
                    </div>
                    <h6>Daniel Carter</h6>
                  </div>
                  <p>Artificial intelligence is reshaping e-learning by personalizing lessons, tracking progress, and improving student engagement...</p>
                  <div className="el_blog_eb_user_details">
                    <button className="el_btn el_link_more">Read more</button>
                    <p>
                      <span className="el_blog_eye_icon">
                        <img src={primaryEyeIcon} alt="primary eye icon" />
                      </span>
                      212,457
                    </p>
                  </div>
                </div>
              </div> 
              <div className="el_blog_eb_card">
                <div className="el_blog_eb_card_img">
                  <img src={relatedBlogCardImg3} alt="blog-related-img2" />
                </div>
                <div className="el_blog_eb_card_cont">
                  <h5>How Interactive Video Courses Improve Student Engagement in Online Education Platforms</h5>
                  <div className="el_blog_eb_userwrap">
                    <div className="el_blog_eb_userimg">
                      <img src={userIcon3} alt="user icon" />
                    </div>
                    <h6>Olivia Bennett</h6>
                  </div>
                  <p>Interactive video lessons increase learner participation, strengthen knowledge retention, and create immersive digital classrooms...</p>
                  <div className="el_blog_eb_user_details">
                    <button className="el_btn el_link_more">Read more</button>
                    <p>
                      <span className="el_blog_eye_icon">
                        <img src={primaryEyeIcon} alt="primary eye icon" />
                      </span>
                      450,432
                    </p>
                  </div>
                </div>
              </div> 
            </Slider>
          </div>
        </div>
      </section>
      {/* related blog */}
      <section className="el_blog_marketing_article">
        <div className="el_container">
          <div className="el_blog_marketing_article_top">
            <h5>Marketing Article </h5>
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

export default Blog