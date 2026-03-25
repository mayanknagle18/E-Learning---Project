import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Modal, ProgressBar, Row } from 'react-bootstrap';
import courseDetailBanner from "../assets/images/backgrounds/course-detail-banner-img.png";
import yellowStarIcon from "../assets/images/icons/star-yellow-icon.svg";
import clockGrayIcon from "../assets/images/icons/clock-gray-icon.svg";
import courseDetailUserImg from "../assets/images/thumbnails/membership-student-img.png";
import courseDetailCardImg from "../assets/images/thumbnails/couse-detail-card-img.png";
import moneyBackGuaranteeIcon from "../assets/images/icons/money-back-icon.svg";
import cameraIcon from "../assets/images/icons/camera-icon.svg";
import certificateIcon from "../assets/images/icons/certificate-icon.svg";
import moduleIcon from "../assets/images/icons/module-icon.svg";
import twitterIcon from "../assets/images/icons/twitter-icon.svg";
import facebookIcon from "../assets/images/icons/facebook-icon.svg";
import youtubeIcon from "../assets/images/icons/youtube-icon.svg";
import instagramIcon from "../assets/images/icons/instagram-icon.svg";
import telegramIcon from "../assets/images/icons/telegram-icon.svg";
import whatsappIcon from "../assets/images/icons/whatsapp-icon.svg";
import everythingYouCanDoImg from "../assets/images/thumbnails/home-every-thing-you-can-do-img.png";
import playBtnIcon from "../assets/images/icons/play-blue-icon.svg";
import everythingYouCanDoVideo from "../assets/video/dummy-video.mp4";

const CourseDetail = () => {
    const [showEverythingModal, setShowEverythingModal] = useState(false);
    const handleShowEverthingClose = () => setShowEverythingModal(false);
    const handleShowEverthingShow = () => setShowEverythingModal(true);
    return (
      <>
        {/* couse detail banner */}
        <section className="el_course_detail_banner">
          <div className="el_course_detail_banner_img">
            <img src={courseDetailBanner} alt="course detail banner" />
          </div>
        </section>
        {/* couse details */}
        <section className="el_course_details_sec">
          <div className="el_container">
            <div className="el_course_details_wrap">
              <div className="el_course_details_left">
                <div className="el_course_details_ratings">
                  <div className="el_course_det_rating_box">
                    <h6>4 out of 5</h6>
                    <div className="el_course_det_rates">
                      <span className="el_course_det_star">
                        <img src={yellowStarIcon} alt="star icon" />
                      </span>
                      <span className="el_course_det_star">
                        <img src={yellowStarIcon} alt="star icon" />
                      </span>
                      <span className="el_course_det_star">
                        <img src={yellowStarIcon} alt="star icon" />
                      </span>
                      <span className="el_course_det_star">
                        <img src={yellowStarIcon} alt="star icon" />
                      </span>
                      <span className="el_course_det_star">
                        <img src={yellowStarIcon} alt="star icon" />
                      </span>
                    </div>
                    <p>Top Raiting</p>
                  </div>
                  <div className="el_course_det_rating_lines">
                    <ul>
                      <li>
                        <h6>5 Stars</h6>
                        <ProgressBar now={60} className="el_progress_bar"/>
                      </li>
                      <li>
                        <h6>4 Stars</h6>
                        <ProgressBar now={60} className="el_progress_bar"/>
                      </li>
                      <li>
                        <h6>3 Stars</h6>
                        <ProgressBar now={60} className="el_progress_bar"/>
                      </li>
                      <li>
                        <h6>2 Stars</h6>
                        <ProgressBar now={60} className="el_progress_bar"/>
                      </li>
                      <li>
                        <h6>1 Stars</h6>
                        <ProgressBar now={60} className="el_progress_bar"/>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="el_course_details_user_ratings">
                  <div className="el_course_details_user">
                    <div className="el_course_det_main">
                      <div className="el_course_det_user_wrap">
                        <div className="el_course_det_user_img">
                          <img src={courseDetailUserImg} alt="course detail user" />
                        </div>
                        <div className="el_course_det_user_cont">
                          <h6>Lina Smith</h6>
                          <div className="el_course_det_user_star">
                            <span className="el_course_det_star">
                              <img src={yellowStarIcon} alt="star icon" />
                            </span>
                            <span className="el_course_det_star">
                              <img src={yellowStarIcon} alt="star icon" />
                            </span>
                            <span className="el_course_det_star">
                              <img src={yellowStarIcon} alt="star icon" />
                            </span>
                            <span className="el_course_det_star">
                              <img src={yellowStarIcon} alt="star icon" />
                            </span>
                            <span className="el_course_det_star">
                              <img src={yellowStarIcon} alt="star icon" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="el_course_det_user_monthwrap">
                        <img src={clockGrayIcon} alt="clock gray icon" />
                        <span>3 Month</span>
                      </div>
                    </div>
                    <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                  </div>
                  <div className="el_course_details_user">
                    <div className="el_course_det_main">
                      <div className="el_course_det_user_wrap">
                        <div className="el_course_det_user_img">
                          <img src={courseDetailUserImg} alt="course detail user" />
                        </div>
                        <div className="el_course_det_user_cont">
                          <h6>Lina Smith</h6>
                          <div className="el_course_det_user_star">
                            <span className="el_course_det_star">
                              <img src={yellowStarIcon} alt="star icon" />
                            </span>
                            <span className="el_course_det_star">
                              <img src={yellowStarIcon} alt="star icon" />
                            </span>
                            <span className="el_course_det_star">
                              <img src={yellowStarIcon} alt="star icon" />
                            </span>
                            <span className="el_course_det_star">
                              <img src={yellowStarIcon} alt="star icon" />
                            </span>
                            <span className="el_course_det_star">
                              <img src={yellowStarIcon} alt="star icon" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="el_course_det_user_monthwrap">
                        <img src={clockGrayIcon} alt="clock gray icon" />
                        <span>3 Month</span>
                      </div>
                    </div>
                    <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                  </div>
                </div>
              </div>
              <div className="el_course_details_right">
                <div className="el_course_details_img">
                  <img src={courseDetailCardImg} alt="course details img" />
                </div>
                <div className="el_course_details_price">
                  <h3>$49.65</h3>
                  <h5>$99.99</h5>
                  <h5>50% Off</h5>
                </div>
                <p>11 hour left at this price</p>
                <button className="el_btn el_primary_btn">Buy Now</button>
                <div className="el_course_details_tci">
                  <h5>This Course included</h5>
                  <ul>
                    <li>
                      <img src={moneyBackGuaranteeIcon} alt="money back guarantee" />
                      Money Back Guarantee
                    </li>
                    <li>
                      <img src={cameraIcon} alt="camera icon" />
                      Access on all devices
                    </li>
                    <li>
                      <img src={certificateIcon} alt="certificate icon" />
                      Certification of completion
                    </li>
                    <li>
                      <img src={moduleIcon} alt="module icon" />
                      32 Moduls
                    </li>
                  </ul>
                </div>
                <div className="el_course_details_tfmp">
                  <h5>This Course included</h5>
                  <p>Designed for small teams, training 5 or more people simultaneously.</p>
                </div>
                <div className="el_course_details_stc">
                  <h5>Share this course</h5> 
                  <div className="el_course_details_stc_icons">
                    <Link to="#">
                    <span className="el_course_details_stc_icon"><img src={twitterIcon} alt="twitter-icon" /></span> 
                    </Link>
                    <Link to="#"> 
                    <span className="el_course_details_stc_icon"><img src={facebookIcon} alt="facebook-icon" /></span>
                    </Link>
                    <Link to="#"> 
                    <span className="el_course_details_stc_icon"><img src={youtubeIcon} alt="youtube-icon" /></span>
                    </Link>
                    <Link to="#"> 
                    <span className="el_course_details_stc_icon"><img src={instagramIcon} alt="instagram-icon" /></span>
                    </Link>
                    <Link to="#"> 
                    <span className="el_course_details_stc_icon"><img src={telegramIcon} alt="telegram-icon" /></span>
                    </Link>
                    <Link to="#"> 
                    <span className="el_course_details_stc_icon"><img src={whatsappIcon} alt="whatsapp-icon" /></span>
                    </Link> 
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
        {/* top education offers and deals */}
        <section className="el_course_detail_top_education">
          <div className="el_container">
            <div className="el_course_detail_te_top">
              <h5>Top  Education offers and deals are listed here</h5>
              <button class="el_btn el_link_btn">See All</button>
            </div>
            <div className="el_course_detail_te_bottom">
              <Row className="el_course_detail_te_row">
                <Col md={4} className="el_course_detail_te_col">
                  <div className="el_course_detail_te_card">
                    <div className="el_course_detail_te_dis">
                      <h6>50%</h6>
                    </div>
                    <h5>for instructors</h5>
                    <p>TOTC's school management software helps traditional and online schools manage scheduling</p>
                  </div>
                </Col>
                <Col md={4} className="el_course_detail_te_col">
                  <div className="el_course_detail_te_card">
                    <div className="el_course_detail_te_dis">
                      <h6>50%</h6>
                    </div>
                    <h5>for instructors</h5>
                    <p>TOTC's school management software helps traditional and online schools manage scheduling</p>
                  </div>
                </Col>
                <Col md={4} className="el_course_detail_te_col">
                  <div className="el_course_detail_te_card">
                    <div className="el_course_detail_te_dis">
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

export default CourseDetail;