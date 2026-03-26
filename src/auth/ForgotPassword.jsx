import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    }

    return (
        <div className="el_auth_main">
            <div className="el_auth_wrapper"> 
                <div className={"el_auth_left"}>
                    <div className="el_auth_overlay"></div>
                    <div className="el_auth_cont">
                        <h4>Trouble Signing In?</h4>
                        <h6>Reset your password and continue your learning without interruption.</h6>
                    </div>
                </div>
                <div className="el_auth_right">  
                    <div className="el_auth_tabs el_auth_forgot_pass">  
                        <h4>Forgot Password</h4>
                        <p>Enter your email address and set a new password to reset your account.</p>
                        <form action="" className="el_form_auth">
                            <div className="el_label_input">
                                <label htmlFor="" className="el_label">Email</label>
                                <input type="email" className="el_input el_auth_input" placeholder="Enter your Email"/>
                            </div>
                            <div className="el_label_input">
                                <label htmlFor="" className="el_label">New Password</label>
                                <input type="password" className="el_input el_auth_input" placeholder="Enter your New Password"/>
                            </div>
                            <div className="el_label_input">
                                <label htmlFor="" className="el_label">Confirm Password</label>
                                <input type="password" className="el_input el_auth_input" placeholder="Confirm your New Password"/>
                            </div> 
                            <div className="el_auth_btn_wrap">
                                <button type="button" className="el_btn el_primary_btn el_btn_rounded" onClick={goToLogin}>Back</button>
                                <button type="button" className="el_btn el_primary_btn el_btn_rounded">Update</button>
                            </div>
                        </form>      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;