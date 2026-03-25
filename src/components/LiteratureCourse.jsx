import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import literatureBannerImg from "../assets/images/thumbnails/literature-banner-img.png";
import twitterPrimaryIcon from "../assets/images/icons/twitter-primary-icon.svg"; 
import youtubePrimaryIcon from "../assets/images/icons/youtube-primary-icon.svg"; 
import instagramPrimaryIcon from "../assets/images/icons/instagram-primary-icon.svg"; 
import grayStarIcon from "../assets/images/icons/gray-star-icon.svg";
import grayEyeIcon from "../assets/images/icons/gray-eye-icon.svg";
import grayPlayBtnIcon from "../assets/images/icons/gray-play-btn-icon.svg";
import literatureCourseImg1 from "../assets/images/thumbnails/literature-course-img1.png";
import literatureCourseImg2 from "../assets/images/thumbnails/literature-course-img2.png";
import literatureCourseImg3 from "../assets/images/thumbnails/literature-course-img3.png";
import literatureCourseImg4 from "../assets/images/thumbnails/literature-course-img4.png";
import literatureCourseImg5 from "../assets/images/thumbnails/literature-course-img5.png";
import literatureCourseImg6 from "../assets/images/thumbnails/literature-course-img6.png";
import { Pagination } from '@mui/material';

const LiteratureCourse = () => {
  return (
    <>
        {/* literature banner card */}
        <section className="el_literature_banner_sec">
            <div className="el_container">
                <div className="el_literature_banner">
                    <div className='el_literature_card'>
                        <div className="el_lc_img">
                            <img src={literatureBannerImg} alt="literature banner" />
                        </div>
                        <div className="el_lc_content">
                            <div className="el_lc_content_top">
                                <h5>John Anderson</h5>
                                <button className="el_btn el_primary_btn">Enroll Now</button>
                            </div>
                            <p>Assistant Professor at Mcmaster University</p>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim iste aliquid temporibus unde aspernatur deserunt placeat quod. Repudiandae, aperiam!</h6>
                            <div className="el_lc_rating_link_wrap">
                                <div className="el_lc_rating">
                                    <div className="el_lc_rating_item">
                                        <div className="el_lc_rating_img">
                                            <img src={grayStarIcon} alt="star icon" />
                                        </div>
                                        <span>4.9 instructor Rating</span>
                                    </div>
                                    <div className="el_lc_rating_item">
                                        <div className="el_lc_rating_img">
                                            <img src={grayEyeIcon} alt="eye icon" />
                                        </div>
                                        <span>1,592 Students</span>
                                    </div>
                                    <div className="el_lc_rating_item">
                                        <div className="el_lc_rating_img">
                                            <img src={grayPlayBtnIcon} alt="play button icon" />
                                        </div>
                                        <span>Courses</span>
                                    </div>
                                </div>
                                <div className="el_lc_social_link">
                                    <Link to="#"><img src={twitterPrimaryIcon} alt="twitter icon" /></Link>
                                    <Link to="#"><img src={youtubePrimaryIcon} alt="youtube icon" /></Link>
                                    <Link to="#"><img src={instagramPrimaryIcon} alt="instagram icon" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* literature course section */}
        <section className="el_literature_course_sec">
            <div className="el_container">
                <h5>Literature course</h5>
                <div className="el_literature_course_wrap">
                    <Row className="el_ctbc_row">
                        <Col lg={4} md={6} className="el_ctbc_col">
                            <div className="el_literature_course_card">
                                <div className="el_literature_course_card_img">
                                    <img src={literatureCourseImg1} alt="Literature Course Img" />
                                </div>
                                <div className="el_literature_course_card_cont">
                                    <h6>Build your dream network</h6>
                                    <h5>$24</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="el_ctbc_col">
                            <div className="el_literature_course_card">
                                <div className="el_literature_course_card_img">
                                    <img src={literatureCourseImg2} alt="Literature Course Img" />
                                </div>
                                <div className="el_literature_course_card_cont">
                                    <h6>Visible Learning for Literacy</h6>
                                    <h5>$29</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="el_ctbc_col">
                            <div className="el_literature_course_card">
                                <div className="el_literature_course_card_img">
                                    <img src={literatureCourseImg3} alt="Literature Course Img" />
                                </div>
                                <div className="el_literature_course_card_cont">
                                    <h6>New Rules of Work</h6>
                                    <h5>$34</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="el_ctbc_col">
                            <div className="el_literature_course_card">
                                <div className="el_literature_course_card_img">
                                    <img src={literatureCourseImg4} alt="Literature Course Img" />
                                </div>
                                <div className="el_literature_course_card_cont">
                                    <h6>Pivot - Jenny Blake</h6>
                                    <h5>$39</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="el_ctbc_col">
                            <div className="el_literature_course_card">
                                <div className="el_literature_course_card_img">
                                    <img src={literatureCourseImg5} alt="Literature Course Img" />
                                </div>
                                <div className="el_literature_course_card_cont">
                                    <h6>Learning and Development</h6>
                                    <h5>$29</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="el_ctbc_col">
                            <div className="el_literature_course_card">
                                <div className="el_literature_course_card_img">
                                    <img src={literatureCourseImg6} alt="Literature Course Img" />
                                </div>
                                <div className="el_literature_course_card_cont">
                                    <h6>Visible Learning - Part2</h6>
                                    <h5>$24</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="el_literature_course_pagination">
                    <Pagination count={5} className="el_pagination"/>
                </div>
            </div>
        </section>
    </>
  )
}

export default LiteratureCourse;