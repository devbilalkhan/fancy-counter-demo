import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ fn }) {
  return (
    <button className="reset" onClick={() => fn(0)}>
      <ResetIcon />
    </button>
  );
}
