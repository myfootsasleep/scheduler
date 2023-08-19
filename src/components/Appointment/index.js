import React from "react";
import "components/Appointment/styles.scss";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRMING = "CONFIRMING"


const Appointment = (props) => {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  const isLastAppointment = props.time === "5pm";
  //Save Interview function
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => {
      transition(SHOW);
    });
  }
  function onDelete() {
    console.log("Test for OnDelete func")
    transition(DELETING)
    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY)
      })
  }
  return (
    <div
      className={`appointment${isLastAppointment ? " appointment--last" : ""}`}
    >
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={()=> transition(CONFIRMING)}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === SAVING && <Status message = "Saving"/>}
      {mode === DELETING && <Status message = "Deleting"/>}
      {mode === CONFIRMING && <Confirm message = "Are you sure you want to Delete?" onCancel = {()=> transition(SHOW)} onConfirm = {onDelete}/>}
    </div>
  );
};

export default Appointment;
