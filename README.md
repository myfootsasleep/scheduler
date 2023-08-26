# Interview Scheduler

!["Gif of Function"](https://github.com/myfootsasleep/scheduler/blob/master/docs/Scheduler%20Test.gif)

## About The App

This is an app that can create, edit, and delete interviews. You can type in your name, and select a interviewer by clicking empty time slots. 

This app uses React hooks like useState, and useEffect, as well as custom hooks. The data that we are using come from a API server using PostgreSQL, and we proxy it into our main code. Most of this code has been tested with JEST where we followed Test Driven Development, and we have tested components as well using Storybook.

This project has taught me a lot about TDD and Component testing, and has deepened my understanding for ReactJS

## Project Features

<li>Appointment by days is listed Monday to Friday with remaining spots available displayed</li>
<li>If there are no more spots available the hover will display a different shade</li>
<li>Users can book interviews by typing in a student name and clicking on an interviewer</li>
<li>Users can edit or delete interviews by clicking on the icons</li>
<li>When clicking the delete button, users will be prompted to confirm</li>
<li>Errors in expected places will work ie, name or interviewer left blank, or issues when connecting with server</li>
<li>Everything is happening in realtime. Our data directly impacts the server api, and spots remaining will update</li>


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
