import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import { useState } from 'react';

export default function Form(props) {
  console.log(props.interviewer, "from form.js")
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  
  return (
    
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off">
        <input
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="Enter Student Name" 
          value = {props.student}
        />
      </form>
      <InterviewerList
          interviewers={props.interviewers}
          value={props.value}
        />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick = {props.onCancel}>Cancel</Button>
        <Button confirm onClick ={props.onSave}>Save</Button>
      </section>
    </section>
  </main>
  );
}