import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CounterButtons({ counter, fn }) {
  return (
    <div className="button-container">
      <button onClick={() => fn(counter - 1)} className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button onClick={() => fn(counter + 1)} className="count-btn">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
