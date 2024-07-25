export default function Count({ counter, fn }) {
  return (
    <p onClick={() => fn(counter + 1)} className="count">
      {counter}
    </p>
  );
}
