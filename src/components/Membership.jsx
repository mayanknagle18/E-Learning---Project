import React from 'react';
import Slider from 'react-slick';
import { Accordion, Col, Row } from 'react-bootstrap';
import grayTickMarkIcon from "../assets/images/icons/gray-tick-mark-icon.svg";
import yellowTickMarkIcon from "../assets/images/icons/yellow-tck-mark-icon.svg";
import greenTickMarkIcon from "../assets/images/icons/green-tickmark-icon.svg";
import whatStudentSayImg from "../assets/images/thumbnails/membership-student-img.png";
import androidAppIcon from "../assets/images/icons/android-icon.svg";
import iosAppIcon from "../assets/images/icons/ios-icon.svg";
import applyForTeacherImg from "../assets/images/thumbnails/blog-related-img2.png";
import applyForCoursectorImg from "../assets/images/thumbnails/blog-related-img3.png";

const Membership = () => {

  const whatStudentSay = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      {/* affordable pricing */}
      <section className="el_membership_affordable_pricing">
        <div className="el_container">
          <div className="el_membership_affordable_cont">
            <h3>Affordable <span className="el_highlight">pricing</span></h3>
          </div>
          <div className="el_membership_ap_card_wrap">
            <Row className="el_membership_ap_card_row">
              <Col md={4} className="el_membership_ap_card_col">
                <div className="el_membership_ap_card">
                  <div className="el_membership_ap_card_inner">
                    <div className="el_membership_ap_card_top">
                      <h6>Beginner</h6> 
                    </div>
                    <h3>Free <span className="el_small_text">/month</span></h3>
                    <ul>
                      <li>
                        <span>
                          <img src={grayTickMarkIcon} alt="gray tick mark icon" />
                        </span>
                        Components-driven system
                      </li>
                      <li>
                        <span>
                          <img src={grayTickMarkIcon} alt="gray tick mark icon" />
                        </span>
                        Sales-boosting landing pages
                      </li>
                      <li>
                        <span>
                          <img src={grayTickMarkIcon} alt="gray tick mark icon" />
                        </span>
                        Awesome Feather icons pack
                      </li>
                    </ul>
                  </div>
                  <div className="el_membership_ap_card_btn">
                    <button className="el_btn el_outline_primary_btn">Try for free</button>
                  </div>
                </div>
              </Col>
              <Col md={4} className="el_membership_ap_card_col">
                <div className="el_membership_ap_card">
                  <div className="el_membership_ap_card_inner">
                    <div className="el_membership_ap_card_top">
                      <h6>Individual</h6>
                      <span className="el_member_coupon">Best!</span>
                    </div>
                    <h3>$24 <span className="el_small_text">/month</span></h3>
                    <ul>
                      <li>
                        <span>
                          <img src={yellowTickMarkIcon} alt="yellow tick mark icon" />
                        </span>
                        Components-driven system
                      </li>
                      <li>
                        <span>
                          <img src={yellowTickMarkIcon} alt="yellow tick mark icon" />
                        </span>
                        Sales-boosting landing pages
                      </li>
                      <li>
                        <span>
                          <img src={yellowTickMarkIcon} alt="yellow tick mark icon" />
                        </span>
                        Awesome Feather icons pack
                      </li>
                      <li>
                        <span>
                          <img src={yellowTickMarkIcon} alt="yellow tick mark icon" />
                        </span>
                        Themed into 3 different styles
                      </li>
                      <li>
                        <span>
                          <img src={yellowTickMarkIcon} alt="yellow tick mark icon" />
                        </span>
                        Will help to learn Figma
                      </li>
                    </ul>
                  </div>
                  <div className="el_membership_ap_card_btn">
                    <button className="el_btn el_outline_primary_btn">Regular Licence</button>
                  </div>
                </div>
              </Col>
              <Col md={4} className="el_membership_ap_card_col">
                <div className="el_membership_ap_card">
                  <div className="el_membership_ap_card_inner">
                    <div className="el_membership_ap_card_top">
                      <h6>Corporate</h6>
                      <span className="el_member_coupon">Best!</span>
                    </div>
                    <h3>$19 <span className="el_small_text">/month</span></h3>
                    <ul>
                      <li>
                        <span>
                          <img src={greenTickMarkIcon} alt="green tick mark icon" />
                        </span>
                        Components-driven system
                      </li>
                      <li>
                        <span>
                          <img src={greenTickMarkIcon} alt="green tick mark icon" />
                        </span>
                        Sales-boosting landing pages
                      </li>
                      <li>
                        <span>
                          <img src={greenTickMarkIcon} alt="green tick mark icon" />
                        </span>
                        Awesome Feather icons pack
                      </li>
                      <li>
                        <span>
                          <img src={greenTickMarkIcon} alt="green tick mark icon" />
                        </span>
                        Themed into 3 different styles
                      </li>
                    </ul>
                  </div>
                  <div className="el_membership_ap_card_btn">
                    <button className="el_btn el_outline_primary_btn">Try for free</button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      {/* online coaching lesson */}
      <section className="el_membership_online_coaching_lesson">
        <div className="el_container">
          <div className="el_membership_ocl_wrap">
            <div className="el_membership_ocl_main">
              <h4>Online coaching lessons for remote learning.</h4>
              <p>Online coaching lessons for remote learning provide students with flexible, personalized education from the comfort of their homes. Through live video sessions, interactive assignments, and real-time feedback.</p>
              <div className="el_membership_ocl_btn">
                <button className="el_btn el_primary_btn">Start learning now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* online coaching learning */}
      <section className="el_membership_online_coaching_learning">
        <div className="el_container">
          <h3>Online coaching lessons for <span className="el_highlight">remote learning</span></h3>
          <div className="el_membership_ocl_accordion">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Flexible Learning Schedule</Accordion.Header>
                <Accordion.Body>
                 Online coaching allows students to learn at their own pace and choose class timings that fit their daily routine. This flexibility helps balance studies with work, school, or personal responsibilities.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Interactive Live Sessions</Accordion.Header>
                <Accordion.Body>
                 Live virtual classes enable real-time interaction between teachers and students. Learners can ask questions instantly, participate in discussions, and receive immediate feedback for better understanding.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Personalized Study Plans</Accordion.Header>
                <Accordion.Body>
                 Online coaching platforms often provide customized lesson plans based on individual learning needs. This ensures students focus more on weak areas while strengthening their overall performance.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Access to Recorded Lectures</Accordion.Header>
                <Accordion.Body>
                 Students can revisit recorded sessions anytime to revise complex topics. This feature supports better retention and allows learners to study at their own comfort and speed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Affordable and Accessible Education</Accordion.Header>
                <Accordion.Body>
                 Remote learning reduces travel and infrastructure costs, making quality education more affordable. Students from different locations can access expert coaching without geographical limitations.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
      {/* what our students say */}
      <section className="el_membership_what_our_students_say">
        <div className="el_container">
          <h3>What <span className="el_highlight">our students</span> have to say</h3>
          <div className="el_membership_woss_wrap">
            <Slider {...whatStudentSay}>
              <div className="el_membership_woss_card">
                <div className="el_membership_woss_top">
                  <div className="el_membership_woss_img">
                    <img src={whatStudentSayImg} alt="student img" />
                  </div> 
                  <h6>Emily Johnson</h6>
                </div>
                <p>The online coaching program helped me stay consistent with my studies. The instructors are supportive, and the lessons are easy to follow and understand.</p>
              </div>
              <div className="el_membership_woss_card">
                <div className="el_membership_woss_top">
                  <div className="el_membership_woss_img">
                    <img src={whatStudentSayImg} alt="student img" />
                  </div>
                  <h6>Michael Brown</h6>
                </div>
                <p>I appreciate the flexibility of remote learning. I can attend classes after work and still get the same quality education as in-person sessions.</p>
              </div>
              <div className="el_membership_woss_card">
                <div className="el_membership_woss_top">
                  <div className="el_membership_woss_img">
                    <img src={whatStudentSayImg} alt="student img" />
                  </div>
                  <h6>Daniel Miller</h6>
                </div>
                <p>Having access to recorded lectures made exam preparation much easier. I could review difficult topics multiple times at my own pace.</p>
              </div>
              <div className="el_membership_woss_card">
                <div className="el_membership_woss_top">
                  <div className="el_membership_woss_img">
                    <img src={whatStudentSayImg} alt="student img" />
                  </div>
                  <h6>Olivia Davis</h6>
                </div>
                <p>The personalized approach really stood out to me. My mentor created a study plan tailored to my goals, which helped me improve quickly.</p>
              </div>
              <div className="el_membership_woss_card">
                <div className="el_membership_woss_top">
                  <div className="el_membership_woss_img">
                    <img src={whatStudentSayImg} alt="student img" />
                  </div>
                  <h6>Ethan Anderson</h6>
                </div>
                <p>The remote coaching experience exceeded my expectations. The structured lessons, supportive mentors, and flexible schedule helped.</p>
              </div> 
            </Slider>
          </div>
        </div>
      </section>
      {/* app is available for free */}
      <section className="el_membership_app_is_available">
        <div className="el_container">
          <div className="el_membership_aia_wrap">
            <h4>APP is available for free</h4>
            <div className="el_membership_aia_btns">
              <button className="el_btn el_blue_btn">
                <img src={androidAppIcon} alt="android app icon" />
                Android APP
              </button>
              <button className="el_btn el_primary_btn">
                <img src={iosAppIcon} alt="ios app icon" />
                IOS APP
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* apply for teacher and coursector */}
      <section className="el_membership_aftac">
        <div className="el_container">
          <Row className="el_membership_aftac_row">
            <Col md={6} className="el_membership_aftac_col">
              <div className="el_membership_aftac_card">
                <div className="el_membership_aftac_img">
                  <img src={applyForTeacherImg} alt="apply for teacher img" />
                </div>
                <div className="el_membership_aftac_cont">
                  <h6>Become a Teacher</h6>
                  <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                  <div className="el_membership_aftac_btn">
                    <button className="el_btn el_primary_btn">Apply a Teacher</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="el_membership_aftac_col">
              <div className="el_membership_aftac_card">
                <div className="el_membership_aftac_img">
                  <img src={applyForCoursectorImg} alt="apply for coursector img" />
                </div>
                <div className="el_membership_aftac_cont">
                  <h6>Become a Coursector</h6>
                  <p>Launched recently by Blackboard's co-founder Michael Chasen, Class integrates solely with specific...</p>
                  <div className="el_membership_aftac_btn">
                    <button className="el_btn el_primary_btn">Apply a Coursector</button>
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

export default Membership;