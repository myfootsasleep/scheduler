export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.find((d) => d.name === day);

  if (!selectedDay) {
    return [];
  }

  const appointments = selectedDay.appointments.map(
    (appointmentId) => state.appointments[appointmentId]
  );
  //console.log(appointments, "fom getAppfunc")
  return appointments;
}

export function getInterview(state, interviewer) {
  if (!interviewer) {
    return null;
  }

  const interviewerData = state.interviewers[interviewer.interviewer];

  return {
    student: interviewer.student,
    interviewer: {
      id: interviewerData.id,
      name: interviewerData.name,
      avatar: interviewerData.avatar,
    },
  };
}
