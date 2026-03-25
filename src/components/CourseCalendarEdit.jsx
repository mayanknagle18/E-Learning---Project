import React from 'react'

const CourseCalendarEdit = () => {
  return (
    <div className="el_cc_main_inner_body">
        <h5>Create new event</h5>
        <p>Join our beginner-friendly event to learn the basics of Adobe XD and the fundamentals of UI/UX prototyping. In this session, we will introduce Adobe XD, its interface, and essential tools used to design modern user interfaces. You will also understand how prototyping helps designers create interactive experiences before development begins.</p>
        <div className="el_cc_create_new_card">
            <form action="">
                <div className="el_label_input">
                    <label htmlFor="" className="el_label">Event Name</label>
                    <input type="text" className="el_input" placeholder="Enter your Event Name"/>
                </div>
                <div className="el_label_input_main">
                    <div className="el_label_input">
                        <label htmlFor="" className="el_label">Start date / Time</label>
                        <input type="date" className="el_input" placeholder="Enter Start date / Time"/> 
                    </div> 
                    <div className="el_label_input">
                        <label htmlFor="" className="el_label">End Date / Time</label>
                        <input type="date" className="el_input" placeholder="Enter End Date / Time"/>
                    </div> 
                </div> 
                <div className="el_label_input">
                    <label htmlFor="" className="el_label">Location</label>
                    <input type="text" className="el_input" placeholder="Enter your Location"/>
                </div>
                <div className="el_label_input_main">
                    <div className="el_label_input">
                        <label htmlFor="" className="el_label">Notification</label>
                        <div className="el_input_select">
                            <select name="" id="" className="el_input el_select">
                                <option value="">30min</option>
                                <option value="">1hrs</option>
                                <option value="">1hrs 30min</option>
                                <option value="">2hrs</option>
                            </select>
                        </div>
                    </div> 
                    <div className="el_label_input">
                        <label htmlFor="" className="el_label">Email</label>
                        <input type="email" className="el_input" placeholder="Enter Email"/>
                    </div> 
                </div> 
                <div className="el_label_input">
                    <label htmlFor="" className="el_label">Event Description</label>
                    <textarea name="" id="" className="el_input el_textarea" placeholder="Enter your Event Description"></textarea>
                </div>
                <div className="el_create_new_card_btn">
                    <button className="el_btn el_primary_btn">Save Now</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CourseCalendarEdit;