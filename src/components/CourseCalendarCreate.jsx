import React, { useState } from 'react';
import leftWhiteArrowIcon from "../assets/images/icons/left-arrow-white-icon.svg.svg";
import openBookWhiteIcon from "../assets/images/icons/open-book-white-icon.svg";
import openBookBlackIcon from "../assets/images/icons/open-book-black-icon.svg";
import clockWhiteIcon from "../assets/images/icons/clock-white-icon.svg.svg";
// import CourseCalendarEdit from './CourseCalendarEdit';
// import CourseCalendarSelect from './CourseCalendarSelect';
// import CourseCalendarSet from './CourseCalendarSet';
import CourseCalendarView from './CourseCalendarView';

const CourseCalendarCreate = () => {

    const [sidebarClose, setSidebarClose] = useState(true);

    const closeSidebar = () => {
        setSidebarClose(!sidebarClose);
    }

  return ( 
    <div className={`${sidebarClose ? "el_course_calendar" : "el_course_calendar el_cc_sidebar_close"}`}>
        <div className="el_cc_sidebar">
            <div className="el_cc_sidebar_backbtn">
                <button className="el_btn el_primary_btn" onClick={closeSidebar}>
                    <img src={leftWhiteArrowIcon} alt="left arrow icon" />
                </button>
            </div>
            <div className="el_cc_sidebar_content">
                <div className="el_cc_sidebar_courses">
                    <h5>Change Simplification</h5>
                    <ul>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_active">
                                <div className="el_ccs_course_left">
                                    <img src={openBookWhiteIcon} alt="open book white icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_orange">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_skyblue">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_redlight">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="el_cc_sidebar_courses">
                    <h5>Practice Quiz</h5>
                    <ul> 
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_skyblue">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_orange">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_skyblue">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_redlight">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_skyblue">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_orange">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_skyblue">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_redlight">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_skyblue">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_orange">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_skyblue">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                        <li>
                            <div className="el_cc_sidebar_course_wrap el_cc_sidebar_course_redlight">
                                <div className="el_ccs_course_left">
                                    <img src={openBookBlackIcon} alt="open book black icon" />
                                    <h6>Lesson 01 : Introduction about XD</h6>
                                </div>
                                <h5 className="el_cc_sidebar_course_time">30 mins</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="el_cc_main"> 
            <div className="el_cc_main_header">
                <h3>Learn about Adobe XD & Prototyping</h3>
                <div className="el_ccm_header_det">
                    <h6>Introduction about XD</h6>
                    <div className="el_ccm_header_det_time">
                        <img src={clockWhiteIcon} alt="clock white icon" />
                        <h6>1 hour</h6>
                    </div>
                </div>
            </div>
            <div className="el_cc_main_body">
              {/* <CourseCalendarEdit/> */}
              {/* <CourseCalendarSelect/> */}
              {/* <CourseCalendarSet/> */}
              <CourseCalendarView />
            </div>
        </div>
    </div> 
  )
}

export default CourseCalendarCreate;