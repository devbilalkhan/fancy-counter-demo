import Count from "../components/Count";
import Title from "../components/Title";
import ResetButton from "../components/ResetButton";
import CounterButtons from "../components/CounterButtons";
import { useState } from "react";

export default function Card() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="card">
      <Title />
      <Count counter={counter} />
      <ResetButton reset={setCounter} />
      <CounterButtons />
    </div>
  );
}
