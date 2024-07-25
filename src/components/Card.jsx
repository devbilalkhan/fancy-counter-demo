import Count from "../components/Count";
import Title from "../components/Title";
import ResetButton from "../components/ResetButton";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
  const [counter, setCounter] = useState(0);
  const isLocked = counter === 5 ? true : false;
  const message = counter === 5 && "Buy pro version";
  return (
    <div className={`card ${isLocked && "card--limit"}`}>
      <Title message={message} />
      <Count counter={counter} fn={setCounter} />
      <ResetButton fn={setCounter} />
      <ButtonContainer isLocked={isLocked} fn={setCounter} />
    </div>
  );
}
