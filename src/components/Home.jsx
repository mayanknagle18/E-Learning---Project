import React, { useState } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import playBtnIcon from "../assets/images/icons/play-blue-icon.svg";
import bannerImg from "../assets/images/backgrounds/home-banner-img.png";
import fileInvoiceIcon from "../assets/images/icons/file-invoice-icon.svg";
import calendarIcon from "../assets/images/icons/calendar-icon.svg";
import multiUserIcon from "../assets/images/icons/multi-users-icon.svg";
import everythingYouCanDoVideo from "../assets/video/dummy-video.mp4";
import everythingYouCanDoImg from "../assets/images/thumbnails/home-every-thing-you-can-do-img.png";
import ourFeaturesImg from "../assets/images/thumbnails/home-our-features-img.png";
import userInterfaceIcon1 from "../assets/images/icons/user-interface-icon1.svg";
import userInterfaceIcon2 from "../assets/images/icons/user-interface-icon2.svg";
import userInterfaceIcon3 from "../assets/images/icons/user-interface-icon3.svg";
import toolsForTeacherImg from "../assets/images/thumbnails/home-tools-for-teachers-img.png";
import assessmentQuizzesImg from "../assets/images/thumbnails/home-assessment-quizzes-img.png";
import classManagementImg from "../assets/images/thumbnails/home-class-management-img.png";
import oneOnOneImg from "../assets/images/thumbnails/home-one-on-one-discussion.png";
import rightPrimaryArrowIcon from "../assets/images/icons/right-primary-arrow-icon.svg";
import testimonialImg from "../assets/images/thumbnails/home-testimonial-img.png";
import starYellowIcon from "../assets/images/icons/star-yellow-icon.svg";
import homeLatestNewsImg1 from "../assets/images/thumbnails/home-latest-news-and-resources-img1.png";
import homeLatestNewsImg2 from "../assets/images/thumbnails/home-latest-news-and-resources-img2.png";
import homeLatestNewsImg3 from "../assets/images/thumbnails/home-latest-news-and-resources-img3.png";
import homeLatestNewsImg4 from "../assets/images/thumbnails/home-latest-news-and-resources-img4.png";

const Home = () => {

  const [showEverythingModal, setShowEverythingModal] = useState(false);
  const handleShowEverthingClose = () => setShowEverythingModal(false);
  const handleShowEverthingShow = () => setShowEverythingModal(true);

  const homeTestimonialSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    {/* banner */}
    <div className="el_home_banner">
      <div className="el_container">
        <div className="el_home_banner_wrap">
          <div className="el_home_banner_left">
            <h2><span className="el_highlight">Studying</span> Online is now much easier</h2>
            <h6>TOTC is an interesting platform that will teach you in more an interactive way</h6>
            <div className="el_home_btn_wrap">
              <button className="el_btn el_secondary_btn el_btn_rounded">Join for free</button>
              <button className="el_play_icon_btn">
                <span className="el_play_icon">
                  <img src={playBtnIcon} alt="play icon" />
                </span>
                Watch how it works
              </button>
            </div>
          </div>
          <div className="el_home_banner_right">
            <img src={bannerImg} alt="banner img" />
          </div>
        </div>
      </div>
    </div>
    {/* our success */}
    <section className="el_home_our_success">
      <div className="el_container">
        <div className="el_home_our_success_cont">
          <h3>Our <span className="el_home_highlight">Success</span></h3>
          <p>Our success is measured by the achievements of our students. From skill development to career growth, we proudly celebrate every milestone reached by our learning community.</p>
        </div>
        <div className="el_home_our_success_exp">
          <div className="el_home_os_exp_wrap">
            <h2>15K+</h2>
            <h6>Students</h6>
          </div>
          <div className="el_home_os_exp_wrap">
            <h2>75%</h2>
            <h6>Total Success</h6>
          </div>
          <div className="el_home_os_exp_wrap">
            <h2>35</h2>
            <h6>Main Questions</h6>
          </div>
          <div className="el_home_os_exp_wrap">
            <h2>26</h2>
            <h6>Chief Experts</h6>
          </div>
          <div className="el_home_os_exp_wrap">
            <h2>16</h2>
            <h6>Years Of Experience</h6>
          </div>
        </div>
      </div>
    </section>
    {/* all in one */}
    <section className="el_home_all_in_one">
      <div className="el_container">
        <div className="el_home_all_in_one_cont">
          <h4>All-In-One <span className="el_home_highlight">Cloud Software.</span></h4>
          <p>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
        </div>
        <div className="el_home_all_in_one_cardwrap">
          <Row className="el_aio_custom_row">
            <Col md={4} className="el_aio_custom_col">
              <div className="el_home_all_in_one_card">
                <div className="el_home_aio_card_icon">
                  <img src={fileInvoiceIcon} width={33} height={46} alt="file invoice icon" />
                </div>
                <h5>Online Billing, Invoicing, & Contracts</h5>
                <p>Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts</p>
              </div>
            </Col>
            <Col md={4} className="el_aio_custom_col">
              <div className="el_home_all_in_one_card">
                <div className="el_home_aio_card_icon">
                  <img src={calendarIcon} width={48} height={48} alt="file invoice icon" />
                </div>
                <h5>Easy Scheduling & Attendance Tracking</h5>
                <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
              </div>
            </Col>
            <Col md={4} className="el_aio_custom_col">
              <div className="el_home_all_in_one_card">
                <div className="el_home_aio_card_icon">
                  <img src={multiUserIcon} width={55} height={44} alt="file invoice icon" />
                </div>
                <h5>Customer Tracking</h5>
                <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
    {/* what is totc */}
    <section className="el_home_what_is_totc">
      <div className="el_container">
        <div className="el_home_what_is_totc_wrap">
          <div className="el_home_wit_cont">
            <h4>What is <span className="el_home_highlight">TOTC?</span></h4>
            <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
          </div>
          <div className="el_home_wit_card_wrap">
            <div className="el_home_wit_card el_home_wit_card_one">
              <div className="el_home_wit_card_overlay"></div>
              <div className="el_home_wit_card_cont">
                <h4>for instructors</h4>
                <div className="el_home_wit_card_btn">
                  <button className="el_btn el_outline_white_btn el_btn_rounded">Start a class today</button>
                </div>
              </div>
            </div>
            <div className="el_home_wit_card el_home_wit_card_two">
              <div className="el_home_wit_card_overlay"></div>
              <div className="el_home_wit_card_cont">
                <h4>for students</h4>
                <div className="el_home_wit_card_btn">
                  <button className="el_btn el_outline_white_btn el_btn_rounded">Enter access code</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* everything you can do */}
    <section className="el_home_everything_you_can_do">
      <div className="el_container">
        <div className="el_home_eycd_wrap">
          <div className="el_home_eycd_wrap_cont">
            <div className="el_home_eycd_circle1"></div>
            <div className="el_home_eycd_circle2"></div>
            <h4>Everything you can do in a physical classroom, <span className="el_home_highlight">you can do with TOTC</span></h4>
            <p>TOTC's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
            <button className="el_btn el_link_more">Learn more</button>
          </div>
          <div className="el_home_eycd_wrap_video">
            <img src={everythingYouCanDoImg} alt="home-every-thing-you-can-do-img" />
            <Button onClick={handleShowEverthingShow} className="el_home_eycd_wrap_video_btn">
              <img src={playBtnIcon} alt="play button icon" />
            </Button>
          </div>
        </div>
      </div>
    </section>
    {/* our features */}
    <section className="el_home_our_features">
      <div className="el_container">
        <div className="el_home_our_features_wrap">
          <div className="el_home_our_features_cont">
            <h4>Our <span className="el_home_highlight">Features</span></h4>
            <p>This very extraordinary feature, can make learning activities more efficient</p>
          </div>
          <div className="el_home_our_features_main">
            <div className="el_home_our_features_left">
              <img src={ourFeaturesImg} alt="home our features img" />
            </div>
            <div className="el_home_our_features_right">
              <h5>A <span className="el_home_highlight">user interface</span> designed for the classroom</h5>
              <ul>
                <li>
                  <div className="el_home_our_features_icon">
                    <img src={userInterfaceIcon1} alt="user interface icon1" />
                  </div>
                  <p>Teachers don't get lost in the grid view and have a dedicated Podium space.</p>
                </li>
                <li>
                  <div className="el_home_our_features_icon">
                    <img src={userInterfaceIcon2} alt="user interface icon2" />
                  </div>
                  <p>TA's and presenters can be moved to the front of the class.</p>
                </li>
                <li>
                  <div className="el_home_our_features_icon">
                    <img src={userInterfaceIcon3} alt="user interface icon3" />
                  </div>
                  <p>Teachers can easily see all students and class data at one time.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* tools for teachers */}
    <section className="el_home_tools_for_teachers">
      <div className="el_container">
        <div className="el_home_tft_wrap">
          <div className="el_home_tft_left">
            <h5><span className="el_home_highlight">Tools </span>For Teachers And Learners</h5>
            <p>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
          </div>
          <div className="el_home_tft_right">
            <img src={toolsForTeacherImg} alt="tools for teacher img" />
          </div>
        </div>
      </div>
    </section>
    {/* assessments quizzes */}
    <section className="el_home_assessments_quizzes">
      <div className="el_container">
        <div className="el_home_aq_wrap"> 
          <div className="el_home_aq_left">
            <img src={assessmentQuizzesImg} alt="assessment quizzes img" />
          </div>
          <div className="el_home_aq_right">
            <h5>Assessments,<span className="el_home_highlight"> Quizzes</span>, Tests</h5>
            <p>Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
          </div>
        </div>
      </div>
    </section>
    {/* class management tools */}
    <section className="el_home_class_management">
      <div className="el_container">
        <div className="el_home_cm_wrap">
          <div className="el_home_cm_left">
            <h5><span className="el_home_highlight">Class Management </span>Tools for Educators</h5>
            <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
          </div>
          <div className="el_home_cm_right">
            <img src={classManagementImg} alt="home class management img" />
          </div>
        </div>
      </div>
    </section>
    {/* one on one discussions */}
    <section className="el_home_one_on_one_discussions">
      <div className="el_container">
        <div className="el_home_oood_wrap">
          <div className="el_home_oood_left">
            <img src={oneOnOneImg} alt="one-one-one img" />
          </div>
          <div className="el_home_oood_right">
            <h5>One-on-One<span className="el_home_highlight"> Discussions</span></h5>
            <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
          </div>
        </div>
        <div className="el_home_oood_btn">
          <button type="button" className="el_btn el_outline_primary_btn el_btn_rounded">See more features</button>
        </div>
      </div>
    </section>
    {/* home testimonial */}
    <section className="el_home_testimonial">
      <div className="el_container">
        <div className="el_home_testimonial_wrap">
          <div className="el_home_testimonial_left">
            <h6>testimonial</h6>
            <h3>What <span className="el_home_highlight">They Say?</span></h3>
            <p>TOTC has got more than 100k positive ratings from our users around the world. </p>
            <p>Some of the students and teachers were greatly helped by the Skilline.</p>
            <p>Are you too? Please give your assessment</p>
            <div className="el_home_testimonial_btn">
              <button type="button" className="el_btn el_outline_primary_btn el_btn_rounded">Write your assessment
                <span className="el_home_test_arrow">
                  <img src={rightPrimaryArrowIcon} alt="right primary icon" />
                </span>
              </button>
            </div>
          </div>
          <div className="el_home_testimonial_right">
            <Slider {...homeTestimonialSlider} className="el_slick_slider">
              {/* item 1 */}
              <div className="el_home_testimonial_main">
                <div className="el_home_testimonial_img">
                  <img src={testimonialImg} alt="home testimonial img" />
                </div>
                <div className="el_home_testimonial_content">
                  <div className="el_home_testimonial_card">
                    <div className="el_home_testimonial_card_top">
                      <p>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</p>
                    </div>
                    <div className="el_home_testimonial_card_bottom">
                      <h6>Gloria Rose</h6>
                      <div className="el_home_testimonial_card_desc"> 
                        <div className="el_home_testimonial_card_rating">
                          <span><img src={starYellowIcon} alt="star-yellow-icon"/></span>
                          <span><img src={starYellowIcon} alt="star-yellow-icon"/></span>
                          <span><img src={starYellowIcon} alt="star-yellow-icon"/></span>
                          <span><img src={starYellowIcon} alt="star-yellow-icon"/></span>
                          <span><img src={starYellowIcon} alt="star-yellow-icon"/></span>
                        </div>
                        <h5>12 reviews at Yelp</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
              {/* item 2 */}
              <div className="el_home_testimonial_main">
                <div className="el_home_testimonial_img">
                  <img src={testimonialImg} alt="home testimonial img" />
                </div>
                <div className="el_home_testimonial_content">
                  <div className="el_home_testimonial_card">
                    <div className="el_home_testimonial_card_top">
                      <p>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</p>
                    </div>
                    <div className="el_home_testimonial_card_bottom">
                      <h6>Gloria Rose</h6>
                      <div className="el_home_testimonial_card_desc"> 
                        <div className="el_home_testimonial_card_rating">
                          <span><img src={starYellowIcon} alt="star-yellow-icon"/></span>
                          <span><img src={starYellowIcon} alt="star-yellow-icon"/></span>
                          <span><img src={starYellowIcon} alt="star-yellow-icon"/></span>
                          <span><img src={starYellowIcon} alt="star-yellow-icon"/></span>
                          <span><img src={starYellowIcon} alt="star-yellow-icon"/></span>
                        </div>
                        <h5>12 reviews at Yelp</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </Slider>
          </div>
        </div>  
      </div>
    </section>
    {/* latest news and resources */}
    <section className="el_home_latest_news_and_resources">
      <div className="el_container">
        <div className="el_home_lnar_cont">
          <h5>Lastest News and <span className="el_home_highlight">Resources</span></h5>
          <p>See the developments that have occurred to TOTC in the world</p>
        </div>
        <div className="el_home_lnar_wrap">
          <div className="el_home_lnar_left">
            <div className="el_home_lnar_img">
              <img src={homeLatestNewsImg1} alt="home-latest-news-img1" />
            </div>
            <span className="el_badge el_badge_primary">news</span>
            <h6>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h6>
            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <button className="el_btn el_link_more">Read more</button>
          </div>
          <div className="el_home_lnar_right">
            <div className="el_home_lnar_card">
              <div className="el_home_lnar_card_imgwrap">
                <div className="el_home_lnar_card_img">
                  <img src={homeLatestNewsImg2} alt="home-latest-news-img2" />
                </div>
                <span className="el_badge el_badge_primary">press release</span> 
              </div>
              <div className="el_home_lnar_card_content">
                <h6>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h6>
                <p>Class Technologies Inc., the company that created Class,...</p>
              </div>
            </div>
            <div className="el_home_lnar_card">
              <div className="el_home_lnar_card_imgwrap">
                <div className="el_home_lnar_card_img">
                  <img src={homeLatestNewsImg3} alt="home-latest-news-img3" />
                </div>
                <span className="el_badge el_badge_primary">news</span>
              </div>
              <div className="el_home_lnar_card_content">
                <h6>Zoom's earliest investors are betting millions on a better Zoom for schools</h6>
                <p>Zoom was never created to be a consumer product. Nonetheless, the...</p>
              </div>
            </div>
            <div className="el_home_lnar_card">
              <div className="el_home_lnar_card_imgwrap">
                <div className="el_home_lnar_card_img">
                  <img src={homeLatestNewsImg4} alt="home-latest-news-img4" />
                </div>
                <span className="el_badge el_badge_primary">news</span> 
              </div>
              <div className="el_home_lnar_card_content">
                <h6>Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h6>
                <p>This year, investors have reaped big financial returns from betting on Zoom...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* everything you can do modal */}
     <Modal show={showEverythingModal} onHide={handleShowEverthingClose} animation={false} className="el_home_eycd_modal" centered>
        <Modal.Header closeButton> 
        </Modal.Header>
        <Modal.Body>
          <video width="600" controls>
            <source src={everythingYouCanDoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal.Body> 
      </Modal>
    </>
  )
}

export default Home;