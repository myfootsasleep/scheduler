import React from "react";
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "components/Appointment";
import useApplicationData from "hooks/useApplicationData";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersByDay,
} from "helpers/selectors";


export default function Application(props) {
  const {state, setDay, bookInterview, cancelInterview} = useApplicationData();
  const interviewers = getInterviewersByDay(state, state.day);
  const appoint = getAppointmentsForDay(state, state.day);

  const schedule = appoint.map((appointment) => {
  const interview = getInterview(state, appointment.interview);
   
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            //onChange={(day) => setState({ ...state, day })}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
