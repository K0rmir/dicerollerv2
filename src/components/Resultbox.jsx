import "../css/Resultbox.css";

export default function ResultBox({result}) {
  return (
    <div className="resultBox">
      <div>
        <p id="result">{result}</p>
      </div>
      <p id="rollBreakdown"></p>
      <p id="rolls"></p>
    </div>
  );
}
