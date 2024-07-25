import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ isLocked, fn, type }) {
  const handleOperation = (e) => {
    fn((prev) =>
      type === "add" ? (prev === 5 ? prev : prev + 1) : prev <= 0 ? 0 : prev - 1
    );
    e.currentTarget.blur();
  };
  return (
    <>
      <button
        disabled={isLocked}
        onClick={handleOperation}
        className="count-btn"
      >
        {type === "subtract" ? (
          <MinusIcon className="count-btn-icon" />
        ) : (
          <PlusIcon className="count-btn-icon" />
        )}
      </button>
    </>
  );
}
