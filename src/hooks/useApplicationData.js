import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => {
    return setState({ ...state, day });
  };

  function updateSpots(days, appointments) {
    const updatedDays = days.map((day) => {
      const spots = day.appointments.reduce((count, appointmentId) => {
        if (!appointments[appointmentId].interview) {
          return count + 1;
        }
        return count;
      }, 0);

      return { ...day, spots };
    });

    return updatedDays;
  }
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prevState) => ({
        ...prevState,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  //Book Interview Function
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(state.days, appointments);
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      setState({
        ...state,
        appointments,
        days,
      });
    });
  }
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(state.days, appointments);
    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments,
          days,
        });
      })
      .catch((error) => {
        // Handle any errors that occur during the cancellation process
      });
  }
  return { state, setDay, bookInterview, cancelInterview };
}
