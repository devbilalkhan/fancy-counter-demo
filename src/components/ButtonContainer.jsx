import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import CountButton from "./CountButton";

export default function ButtonContainer({ isLocked, fn }) {
  return (
    <div className="button-container">
      <CountButton cisLocked={isLocked} fn={fn} type="subtract" />
      <CountButton isLocked={isLocked} fn={fn} type="add" />
    </div>
  );
}
