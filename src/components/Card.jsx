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
      <Count counter={counter} fn={setCounter} />
      <ResetButton fn={setCounter} />
      <CounterButtons counter={counter} fn={setCounter} />
    </div>
  );
}
