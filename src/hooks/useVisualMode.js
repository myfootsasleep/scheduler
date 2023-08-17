import { useState } from "react";

export default function useVisualMode(initial) {
  //const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace) {
    //Call back function to update state
    setHistory((prev) => {
      if (replace) {
        const newHistory = prev.slice(0, prev.length - 1);
        return [...newHistory, mode];
      } else {
        return [...prev, mode];
      }
    });
    console.log(mode)
  }

  function back() {
    if (history.length < 2) {
      return;
    }
    setHistory((prev) => {
      const newHistory = prev.slice(0, prev.length - 1);
      return [...newHistory];
    });
  }
  return { mode: history[history.length - 1], transition, back };
}
