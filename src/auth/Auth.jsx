import React, { useEffect, useState } from 'react'; 
import { Nav, Tab } from "react-bootstrap";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Auth = () => {
    const [activeKey, setActiveKey] = useState("login");
    const [checked, setChecked] = useState(false);
    const [loginImage, setLoginImage] = useState(true);
    // login form states
    const initialValues = { username: "" , password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();
    const location = useLocation(); 
    // register form states
    const registerInitialValues = { email: "" , username: "" , password: "" };
    const [registerFormValues, setRegisterFormValues] = useState(registerInitialValues);
    const [registerFormErrors, setRegisterFormErrors] = useState({});
    const [registerIsSubmit, setRegisterIsSubmit] = useState(false);

    const goToHome = () => {
        navigate("/");
    } 

    useEffect(() => { 
        if (location.state?.tab === "register") {
            setActiveKey("register");
            setLoginImage(false);
        }
    }, [location.state]);

    // login form handlers
    const handleChangeValue = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});  
    };

    const handleValueSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formValues);
        setFormErrors(errors);               
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("Form Submitted:", formValues);
        }
    }, [formErrors, isSubmit, formValues]);

    const validateForm = (values) => {
        const errors = {}; 
        if (!values.username) {
            errors.username = "Username is required!";
        }
        else if(!values.username.match(/^[a-zA-Z0-9]+$/)) {
            errors.username = "Please enter a valid username!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters!";
        }
        else if (values.password.length > 10) {
            errors.password = "Password must be less than 10 characters!";
        }
        return errors;
    };

    // register form handlers
    const handleRegisterValue = (e) => {
        const {name, value} = e.target;
        setRegisterFormValues({...registerFormValues, [name]: value});
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault(); 
        const errors = validateRegisterForm(registerFormValues);
        setRegisterFormErrors(errors);
        setRegisterIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(registerFormErrors).length === 0 && registerIsSubmit) {
            console.log("Registration Form Submitted:", registerFormValues);
        }
    }, [registerFormErrors, registerIsSubmit, registerFormValues]);

    const validateRegisterForm = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Username is required!";
        }
        else if(!values.username.match(/^[a-zA-Z0-9]+$/)) {
            errors.username = "Please enter a valid username!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        }
        else if (!values.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            errors.email = "Please enter a valid email!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters!";
        }
        else if (values.password.length > 10) {
            errors.password = "Password must be less than 10 characters!";
        }
        return errors;
    };

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
                                    {Object.keys(formErrors).length === 0 && isSubmit && (
                                        <div className="el_success_msg">Login successful!</div>
                                    )}
                                   <form action="" className="el_form_auth" onSubmit={handleValueSubmit}>
                                        <div className="el_label_input">
                                            <label htmlFor="" className="el_label">User name</label>
                                            <input type="text" className="el_input el_auth_input" name="username" placeholder="Enter your User name" value={formValues.username} onChange={handleChangeValue}/>
                                            <p className="el_error">{formErrors.username}</p>
                                        </div>
                                        <div className="el_label_input">
                                            <label htmlFor="" className="el_label">Password</label>
                                            <input type="password" className="el_input el_auth_input" name="password" placeholder="Enter your Password" value={formValues.password} onChange={handleChangeValue}/>
                                            <p className="el_error">{formErrors.password}</p>
                                        </div>
                                        <div className="el_checkbox_link_wrap">
                                            <label className="el_checkbox_container">Remember me
                                                <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
                                                <span className="el_checkbox_checkmark"></span>
                                            </label>
                                            <Link to="/forgot-password" className="el_auth_link">Forgot Password?</Link>
                                        </div>
                                        <div className="el_auth_btn_wrap">
                                            <button type="button" className="el_btn el_primary_btn el_btn_rounded" onClick={goToHome}>Back</button>
                                            <button type="submit" className="el_btn el_primary_btn el_btn_rounded">Login</button>
                                        </div>
                                   </form>
                                </Tab.Pane> 
                                <Tab.Pane eventKey="register">
                                   <p>Create a free account to explore courses, track your progress, and unlock new opportunities for growth.</p>
                                    {Object.keys(registerFormErrors).length === 0 && registerIsSubmit && (
                                        <div className="el_success_msg">Registration successful!</div>
                                    )}
                                    <form action="" className="el_form_auth" onSubmit={handleRegisterSubmit}>
                                        <div className="el_label_input">
                                            <label htmlFor="" className="el_label">Email Address</label>
                                            <input type="email" name="email" className="el_input el_auth_input" placeholder="Enter your Email Address" value={registerFormValues.email} onChange={handleRegisterValue}/>
                                            <p className="el_error">{registerFormErrors.email}</p>
                                        </div>
                                        <div className="el_label_input">
                                            <label htmlFor="" className="el_label">User name</label>
                                            <input type="text" name="username" className="el_input el_auth_input" placeholder="Enter your User name" value={registerFormValues.username} onChange={handleRegisterValue}/>
                                            <p className="el_error">{registerFormErrors.username}</p>
                                        </div>
                                        <div className="el_label_input">
                                            <label htmlFor="" className="el_label">Password</label>
                                            <input type="password" name="password" className="el_input el_auth_input" placeholder="Enter your Password" value={registerFormValues.password} onChange={handleRegisterValue}/>
                                            <p className="el_error">{registerFormErrors.password}</p>
                                        </div> 
                                        <div className="el_auth_btn_wrap">
                                            <button type="button" className="el_btn el_primary_btn el_btn_rounded" onClick={goToHome}>Back</button>
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