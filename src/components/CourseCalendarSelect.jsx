import React, { useState } from 'react'; 
import leftArrowIcon from "../assets/images/icons/left-arrow-black-icon.svg.svg";
import rightArrowIcon from "../assets/images/icons/right-arrow-black-icon.svg.svg";

const MONTHS = ['January','February','March','April','May','June',
  'July','August','September','October','November','December'];
const WEEKDAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];
const FULL_DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const EVENTS = {
  12: [{ hour: 2, label: 'Adobe XD Live Class' }],
};

const TIME_SLOTS = ['2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'];

const CourseCalendarSelect = () => {

  const [viewYear, setViewYear] = useState(2021);
  const [viewMonth, setViewMonth] = useState(8);
  const [selectedDay, setSelectedDay] = useState(12);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const cells = Array.from({ length: totalCells }, (_, i) => {
    if (i < firstDay) return { day: daysInPrev - firstDay + i + 1, type: 'other' };
    if (i >= firstDay + daysInMonth) return { day: i - firstDay - daysInMonth + 1, type: 'other' };
    return { day: i - firstDay + 1, type: 'current' };
  });

  const dayOfWeek = FULL_DAYS[new Date(viewYear, viewMonth, selectedDay).getDay()];
  const dayLabel = `${MONTHS[viewMonth].slice(0, 3)} ${selectedDay}, ${dayOfWeek}`;
  const dayEvents = EVENTS[selectedDay] || [];

  return (
    <div className="el_cc_main_inner_body">
      <h5>Share and Refer</h5>
      <p>The Course Calendar provides a comprehensive overview of all scheduled classes, sessions, and important academic events. It allows students and instructors to plan ahead, track progress, and stay updated with upcoming lectures, assignments, and deadlines. With a clear layout and interactive features, the calendar ensures that learning stays organized and accessible, helping everyone manage their time effectively and make the most of the course experience.</p>
      <div className="el_cc_calendar_wrap">
        {/* Left: Month Calendar */}
        <div className="el_cal_left">
          <div className="el_cal_nav">
            <button onClick={prevMonth}>
              <img src={leftArrowIcon} alt="arrow-left" />
            </button>
            <span className="el_cal_nav_title">{MONTHS[viewMonth]} {viewYear}</span>
            <button onClick={nextMonth}>
              <img src={rightArrowIcon} alt="arrow-right" />
            </button>
          </div> 
          <div className="el_cal_weekdays">
            {WEEKDAYS.map(d => <span key={d}>{d}</span>)}
          </div> 
          <div className="el_cal_grid">
            {cells.map((cell, i) => {
              const isOther = cell.type === 'other';
              const isSel = !isOther && cell.day === selectedDay;
              const cls = ['el_cal_day',
                isOther ? 'other' : '',
                isSel ? 'selected' : '',
              ].filter(Boolean).join(' ');
              return (
                <div key={i} className={cls}
                  onClick={() => !isOther && setSelectedDay(cell.day)}>
                  {cell.day}
                </div>
              );
            })}
          </div>
        </div> 
        {/* Divider */}
        <div className="el_cal-divider" /> 
        {/* Right: Day View */}
        <div className="el_cal_right">
          <div className="el_cal_day_header">{dayLabel}</div>
          <div className="el_cal_timeline">
            {TIME_SLOTS.map((slot, idx) => {
              const ev = dayEvents.find(e => e.hour === idx);
              return (
                <div key={slot} className="el_cal_time_row">
                  <span className="el_cal_time_label">{slot}</span>
                  <div className="el_cal_time_line">
                    {ev && <div className="el_cal_event">{ev.label}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCalendarSelect;