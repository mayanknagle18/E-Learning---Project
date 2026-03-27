import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    // forgot form states
    const forgotInitialValues = { email: "", newPassword: "", confirmPassword: "" };
    const [forgotFormValues, setForgotFormValues] = useState(forgotInitialValues);
    const [forgotFormErrors, setForgotFormErrors] = useState({});
    const [forgotIsSubmit, setForgotIsSubmit] = useState(false);

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    }

    // fogot handler
    const forgotPasswordChange = (e) => {
        const { name, value } = e.target;
        setForgotFormValues({...forgotFormValues, [name]: value});
    };

    const forgotRegisterSubmit = (e) => {
        e.preventDefault();
        const errors = validateForgotForm(forgotFormValues);
        setForgotFormErrors(errors);
        setForgotIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(forgotFormErrors).length === 0 && forgotIsSubmit) {
            console.log("Forgot Password Form Submitted:", forgotFormValues);
        }
    }, [forgotFormErrors, forgotIsSubmit, forgotFormValues]);

    const validateForgotForm = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "Email is required!";
        }
        else if (!values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
                errors.email = "Please enter a valid email!";
        }
        if (!values.newPassword) {
            errors.newPassword = "New Password is required!";
        }
        else if (values.newPassword.length < 4) {
            errors.newPassword = "New Password must be more than 4 characters!";
        }
        else if (values.newPassword.length > 10) {
            errors.newPassword = "New Password cannot exceed more than 10 characters!";
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm Password is required!";
        }
        else if (values.confirmPassword.length < 4) {
            errors.confirmPassword = "Confirm Password must be more than 4 characters!";
        }
        else if (values.confirmPassword.length > 10) {
            errors.confirmPassword = "Confirm Password cannot exceed more than 10 characters!";
        }
        if (values.newPassword !== values.confirmPassword) {
            errors.confirmPassword = "Password and Confirm Password must be same!";
        }
        return errors;
    };

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
                        {Object.keys(forgotFormErrors).length === 0 && (
                            <div className="el_success_msg">Password reset successful!</div>
                        )}
                        <form action="" className="el_form_auth" onSubmit={forgotRegisterSubmit}>
                            <div className="el_label_input">
                                <label htmlFor="" className="el_label">Email</label>
                                <input type="email" name="email" className="el_input el_auth_input" placeholder="Enter your Email" value={forgotFormValues.email} onChange={forgotPasswordChange}/>
                                <p className="el_error">{forgotFormErrors.email}</p>
                            </div>
                            <div className="el_label_input">
                                <label htmlFor="" className="el_label">New Password</label>
                                <input type="password" name="newPassword" className="el_input el_auth_input" placeholder="Enter your New Password" value={forgotFormValues.newPassword} onChange={forgotPasswordChange}/>
                                <p className="el_error">{forgotFormErrors.newPassword}</p>
                            </div>
                            <div className="el_label_input">
                                <label htmlFor="" className="el_label">Confirm Password</label>
                                <input type="password" name="confirmPassword" className="el_input el_auth_input" placeholder="Confirm your New Password" value={forgotFormValues.confirmPassword} onChange={forgotPasswordChange}/>
                                <p className="el_error">{forgotFormErrors.confirmPassword}</p>
                            </div> 
                            <div className="el_auth_btn_wrap">
                                <button type="button" className="el_btn el_primary_btn el_btn_rounded" onClick={goToLogin}>Back</button>
                                <button type="submit" className="el_btn el_primary_btn el_btn_rounded">Update</button>
                            </div>
                        </form>      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;