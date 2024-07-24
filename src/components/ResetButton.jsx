export default function ResetButton({ setCounter }) {
  return (
    <button className="bg-orange-400" onClick={() => setCounter(0)}>
      ResetButton
    </button>
  );
}
