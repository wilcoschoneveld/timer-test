import { useEffect, useState } from "react";

export default function Timer() {
  const [state, setState] = useState("Start");

  useEffect(() => {
    setTimeout(() => {
      setState("Next");
    }, 1000);
  }, []);

  return <span>{state}</span>;
}
