import React, { useState } from 'react';
import payPalImage from "../assets/images/thumbnails/pay-pal-img.png";
import americanExpressImage from "../assets/images/thumbnails/american-express-img.png";
import visaImage from "../assets/images/thumbnails/visa-img.png";
import masterCardImage from "../assets/images/thumbnails/master-card-img.png";
import summmaryCardImage from "../assets/images/thumbnails/summary-card-img.png";
import { Col, Row } from 'react-bootstrap';

const Checkout = () => {
    const [checked, setChecked] = useState(false);
    return (
        <> 
            {/* checkout and summary */}
            <section className="el_checkout_and_summary">
                <div className="el_container">
                    <div className="el_checkout_and_summary_wrap">
                        <div className="el_checkout_as_left">
                            <h4>Checkout</h4>
                            <h6>Cart Type</h6>
                            <div className="el_checkout_as_cart_type">
                                <div className="el_checkout_as_cartimg">
                                    <img src={payPalImage} alt="paypal-img" />
                                </div>
                                <div className="el_checkout_as_cartimg">
                                    <img src={americanExpressImage} alt="american-express-img" />
                                </div>
                                <div className="el_checkout_as_cartimg">
                                    <img src={visaImage} alt="visa-img" />
                                </div>
                                <div className="el_checkout_as_cartimg">
                                    <img src={masterCardImage} alt="mastercard-img" />
                                </div>
                            </div>
                            <form action="" className="el_form_auth"> 
                                <div className="el_label_input">
                                    <label htmlFor="" className="el_label">Name on Card</label>
                                    <input type="text" className="el_input" placeholder="Enter name on Card"/>
                                </div> 
                                <div className="el_label_input">
                                    <label htmlFor="" className="el_label">Card Number</label>
                                    <input type="number" className="el_input" placeholder="Enter Card Number"/>
                                </div> 
                                <div className="el_label_input_main">
                                    <div className="el_label_input mb-0">
                                        <label htmlFor="" className="el_label">Expiration Date ( MM/YY )</label>
                                        <input type="text" className="el_input" placeholder="Enter Expiration Date"/> 
                                    </div> 
                                    <div className="el_label_input mb-0">
                                        <label htmlFor="" className="el_label">CVC</label>
                                        <input type="text" className="el_input" placeholder="Enter CVC"/>
                                    </div> 
                                </div> 
                                <div className="el_gray_checkbox">
                                    <label className="el_checkbox_container">Save my information for faster checkout
                                        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
                                        <span className="el_checkbox_checkmark"></span>
                                    </label>
                                </div>
                                <div className="el_btn_wrap">
                                    <button className="el_btn el_primary_btn">Confirm Payment</button>
                                </div>
                            </form>
                        </div>
                        <div className="el_checkout_as_right">
                            <h6>Summary</h6>
                            <div className="el_summary_list_cardwrap">
                                <div className="el_summary_list_card">
                                    <div className="el_summary_list_img">
                                        <img src={summmaryCardImage} alt="summary card img" />
                                    </div>
                                    <div className="el_summary_list_cont">
                                        <h5>Premium Web Design Package</h5>
                                        <h5 className="el_summary_gray">Complete website design package</h5>
                                        <h4>$24.69</h4>
                                    </div>
                                </div>
                                <div className="el_summary_list_card">
                                    <div className="el_summary_list_img">
                                        <img src={summmaryCardImage} alt="summary card img" />
                                    </div>
                                    <div className="el_summary_list_cont">
                                        <h5>Pro Hosting & Maintenance Plan</h5>
                                        <h5 className="el_summary_gray">Reliable hosting and ongoing maintenance</h5>
                                        <h4>$24.69</h4>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <div className="el_summary_list_amounts">
                                        <h6>Subtotal</h6>
                                        <h6>$51.38</h6>
                                    </div>
                                </li>
                                <li>
                                    <div className="el_summary_list_amounts">
                                        <h6>Coupon Discount</h6>
                                        <h6>0 %</h6>
                                    </div>
                                </li>
                                <li>
                                    <div className="el_summary_list_amounts">
                                        <h6>TAX</h6>
                                        <h6>5</h6>
                                    </div>
                                </li>
                                <li>
                                    <div className="el_summary_list_amounts">
                                        <h6 className="el_summary_total">Total</h6>
                                        <h6 className="el_summary_total">$56.38</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>        
            </section>
            {/* top education offers and deals */}
            <section className="el_course_detail_top_education">
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

export default Checkout;