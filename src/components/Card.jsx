import Count from "../components/Count";
import Title from "../components/Title";
import ResetButton from "../components/ResetButton";
import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";

export default function Card() {
  const [counter, setCounter] = useState(0);
  const isLocked = counter <= 0 && counter > 5 ? true : false;
  const message = counter === 5 && "Buy pro version";

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.code === "Space" &&
        setCounter((prev) => (prev === 5 ? prev : prev + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [counter]);
  return (
    <div className={`card ${isLocked && "card--limit"}`}>
      <Title message={message} />
      <Count counter={counter} fn={setCounter} />
      <ResetButton fn={setCounter} />
      <ButtonContainer>
        <CountButton cisLocked={isLocked} fn={setCounter} type="subtract" />
        <CountButton isLocked={isLocked} fn={setCounter} type="add" />
      </ButtonContainer>
    </div>
  );
}
