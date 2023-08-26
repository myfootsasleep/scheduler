export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.find((d) => d.name === day);

  if (!selectedDay) {
    return [];
  }

  const appointments = selectedDay.appointments.map(
    (appointmentId) => state.appointments[appointmentId]
  );
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

export function getInterviewersByDay(state, day) {
  const selectedDay = state.days.find((d) => d.name === day);
  if (!selectedDay) {
    return [];
  }
  const interviewers = selectedDay.interviewers.map(
    (interviewerId) => state.interviewers[interviewerId]
  );
  return interviewers;
}
