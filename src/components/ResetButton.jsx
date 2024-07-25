import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ fn }) {
  const handleClick = (e) => {
    fn(0);
    e.currentTarget.blur();
  };
  return (
    <button className="reset" onClick={handleClick}>
      <ResetIcon />
    </button>
  );
}
