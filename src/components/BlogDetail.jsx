import React from 'react'
import Slider from 'react-slick';
import courseDetailBanner from "../assets/images/backgrounds/course-detail-banner-img.png";
import userIcon1 from "../assets/images/icons/user-icon1.svg";
import userIcon2 from "../assets/images/icons/user-icon2.svg";
import userIcon3 from "../assets/images/icons/user-icon3.svg";
import primaryEyeIcon from "../assets/images/icons/primary-eye-icon.svg";
import authorImg from "../assets/images/thumbnails/membership-student-img.png";
import relatedBlogCardImg1 from "../assets/images/thumbnails/blog-related-img1.png";
import relatedBlogCardImg2 from "../assets/images/thumbnails/blog-related-img2.png";
import relatedBlogCardImg3 from "../assets/images/thumbnails/blog-related-img3.png";

const BlogDetail = () => {

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
        {/* couse detail banner */}
        <section className="el_course_detail_banner">
          <div className="el_course_detail_banner_img">
            <img src={courseDetailBanner} alt="course detail banner" />
          </div>
        </section>
        {/* blog detail content */}
        <section className="el_blog_detail_section">
            <div className="el_container">
                <div className="el_blog_detail_wrap">
                    <h5>Why Swift UI Should Be on the Radar of Every Mobile Developer</h5>
                    <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                    <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    TOTC is a platform </p>
                    <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage </p>
                    <div className="el_blog_detail_badge">
                        <span className="el_blog_badge el_blog_badge_light_green">affordable</span>
                        <span className="el_blog_badge el_blog_badge_light_green">Stunning</span>
                        <span className="el_blog_badge el_blog_badge_light_green">making</span>
                        <span className="el_blog_badge el_blog_badge_light_green">madbrawns</span>
                    </div>
                    <div className="el_blog_detail_author_detail">
                        <div className="el_bd_author_detail_left">
                            <div className="el_bd_author_detail_img">
                                <img src={authorImg} alt="author img" />
                            </div>
                            <div className="el_bd_author_detail_cont">
                                <h6>Written by</h6>
                                <h5>Lina</h5>
                            </div>
                        </div>
                        <div className="el_bd_author_detail_right">
                            <button className="el_btn el_outline_primary_btn">Follow</button>
                        </div>
                    </div>
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
    </>
  )
}

export default BlogDetail;