import React, { useState } from 'react'; 
import { Nav, Tab } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Auth = () => {
    const [activeKey, setActiveKey] = useState("login");
    const [checked, setChecked] = useState(false);
    const [loginImage, setLoginImage] = useState(true);
    return (
        <div className="el_auth_main">
            <div className="el_auth_wrapper"> 
                <div className={loginImage ? "el_auth_left" : "el_auth_left el_auth_left_register"}>
                    <div className="el_auth_overlay"></div>
                    <div className="el_auth_cont">
                        <h4>Welcome Back to LearnHub!</h4>
                        <h6>Unlock your learning potential. Sign in to access your courses</h6>
                    </div>
                </div>
                <div className="el_auth_right"> 
                    <h6>Welcome to E-Learning</h6>
                    <div className="el_auth_tabs">
                        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                            <Nav variant="tabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="login" onClick={() => setLoginImage(true)}>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="register" onClick={() => setLoginImage(false)}>Register</Nav.Link>
                                </Nav.Item> 
                            </Nav> 
                            <Tab.Content>
                                <Tab.Pane eventKey="login">
                                   <p>Log in to continue your learning journey and explore new courses tailored just for you.</p>
                                   <form action="" className="el_form_auth">
                                        <div className="el_label_input">
                                            <label htmlFor="" className="el_label">User name</label>
                                            <input type="text" className="el_input el_auth_input" placeholder="Enter your User name"/>
                                        </div>
                                        <div className="el_label_input">
                                            <label htmlFor="" className="el_label">Password</label>
                                            <input type="password" className="el_input el_auth_input" placeholder="Enter your Password"/>
                                        </div>
                                        <div className="el_checkbox_link_wrap">
                                            <label className="el_checkbox_container">Remember me
                                                <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
                                                <span className="el_checkbox_checkmark"></span>
                                            </label>
                                            <Link to="#" className="el_auth_link">Forgot Password?</Link>
                                        </div>
                                        <div className="el_auth_btn_wrap">
                                            <button type="submit" className="el_btn el_primary_btn el_btn_rounded">Back</button>
                                            <button type="submit" className="el_btn el_primary_btn el_btn_rounded">Login</button>
                                        </div>
                                   </form>
                                </Tab.Pane> 
                                <Tab.Pane eventKey="register">
                                   <p>Create a free account to explore courses, track your progress, and unlock new opportunities for growth.</p>
                                    <form action="" className="el_form_auth">
                                        <div className="el_label_input">
                                            <label htmlFor="" className="el_label">Email Address</label>
                                            <input type="email" className="el_input el_auth_input" placeholder="Enter your Email Address"/>
                                        </div>
                                        <div className="el_label_input">
                                            <label htmlFor="" className="el_label">User name</label>
                                            <input type="text" className="el_input el_auth_input" placeholder="Enter your User name"/>
                                        </div>
                                        <div className="el_label_input">
                                            <label htmlFor="" className="el_label">Password</label>
                                            <input type="password" className="el_input el_auth_input" placeholder="Enter your Password"/>
                                        </div> 
                                        <div className="el_auth_btn_wrap">
                                            <button type="submit" className="el_btn el_primary_btn el_btn_rounded">Back</button>
                                            <button type="submit" className="el_btn el_primary_btn el_btn_rounded">Register</button>
                                        </div>
                                   </form>
                                </Tab.Pane> 
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;