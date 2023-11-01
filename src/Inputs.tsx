import "./App.css";
import { useState } from "react";

export default function Inputs({
  trailer_length_size,
}: {
  trailer_length_size: number;
}) {
  const [countBlocksStraight, setCountBlocksStraight] = useState("");
  const straightBlocksAsNumber = Number(countBlocksStraight);
  const [countBlocksSideways, setCountBlocksSideways] = useState("");
  const sidewaysBlocksAsNumber = Number(countBlocksSideways);
  const [countEurosStraight, setCountEurosStraight] = useState("");
  const straightEurosAsNumber = Number(countEurosStraight);
  const [countEurosSideways, setCountEurosSidways] = useState("");
  const sidewaysEurosAsNumber = Number(countEurosSideways);

  function closestMultipleOfTwo(num: number) {
    if (num === 0) {
      return 0;
    } else if (num >= 1 && num <= 2) {
      return 1;
    } else if (num % 2 === 0) {
      return num;
    } else {
      return num + 2 - (num % 2);
    }
  }

  function closestMultipleOfThree(num: number) {
    if (num === 0) {
      return 0;
    } else if (num >= 1 && num <= 3) {
      return 1;
    } else if (num % 3 === 0) {
      return num;
    } else {
      return num + 3 - (num % 3);
    }
  }

  const closestBlockWidth =
    closestMultipleOfTwo(sidewaysBlocksAsNumber) === 0
      ? 0
      : closestMultipleOfTwo(sidewaysBlocksAsNumber) === 1
      ? closestMultipleOfTwo(sidewaysBlocksAsNumber) * 100
      : (closestMultipleOfTwo(sidewaysBlocksAsNumber) * 100) / 2;

  const closestBlockLength =
    closestMultipleOfTwo(straightBlocksAsNumber) === 0
      ? 0
      : closestMultipleOfTwo(straightBlocksAsNumber) === 1
      ? closestMultipleOfTwo(straightBlocksAsNumber) * 120
      : (closestMultipleOfTwo(straightBlocksAsNumber) * 120) / 2;

  const closestEuroLength =
    closestMultipleOfThree(straightEurosAsNumber) === 0
      ? 0
      : closestMultipleOfThree(straightEurosAsNumber) === 1
      ? closestMultipleOfThree(straightEurosAsNumber) * 120
      : (closestMultipleOfThree(straightEurosAsNumber) * 120) / 3;

  const closestEuroWidth =
    closestMultipleOfTwo(sidewaysEurosAsNumber) === 0
      ? 0
      : closestMultipleOfTwo(sidewaysEurosAsNumber) === 1
      ? closestMultipleOfTwo(sidewaysEurosAsNumber) * 80
      : (closestMultipleOfTwo(sidewaysEurosAsNumber) * 80) / 2;

  let remainingTrailerSize: number = trailer_length_size -
  (closestEuroLength +
    closestEuroWidth +
    closestBlockWidth +
    closestBlockLength);

  return (
    <>
      <p>
        <u>Blocks</u>
      </p>
      <div>
        <h5 className="straight-heading">Straight</h5>
        <input
          value={straightBlocksAsNumber}
          name="blocks-straight"
          onChange={(e) => setCountBlocksStraight(e.target.value)}
          type="number"
        />{" "}
        {closestBlockLength} cm
      </div>

      <div>
        <h5 className="sideways-heading">Sideways</h5>
        <input
          type="number"
          name="blocks-sideways"
          value={sidewaysBlocksAsNumber}
          onChange={(e) => setCountBlocksSideways(e.target.value)}
        />{" "}
        {closestBlockWidth} cm
      </div>
      <hr />
      <p>
        <u>Euros</u>
      </p>
      <div>
        <h5 style={{ margin: "0", display: "inline", paddingRight: "1.5em" }}>
          Straight
        </h5>
        <input
          type="number"
          name="euros-straight"
          value={straightEurosAsNumber}
          onChange={(e) => setCountEurosStraight(e.target.value)}
        />{" "}
        {closestEuroLength} cm
      </div>

      <div>
        <h5 style={{ margin: "0", display: "inline", paddingRight: ".95em" }}>
          Sideways
        </h5>
        <input
          type="number"
          name="euros-straight"
          value={sidewaysEurosAsNumber}
          onChange={(e) => setCountEurosSidways(e.target.value)}
        />{" "}
        {closestEuroWidth} cm
      </div>
      <hr />
      <p>
        Total N of Palettes:{" "}
        {straightBlocksAsNumber +
          straightEurosAsNumber +
          sidewaysBlocksAsNumber +
          sidewaysEurosAsNumber}
      </p>
      <p style={{ width: "13em" }}>
        Total Length of Palettes:{" "}
        {closestEuroLength +
          closestEuroWidth +
          closestBlockWidth +
          closestBlockLength}
      </p>
      {remainingTrailerSize > 0 ? 
      <p className="green-text">
        Remaining Length:{' '}{remainingTrailerSize}{' '}
        cm
      </p>
      :
      <p className="red-text">
      Remaining Length:{" "}
      {" "}
      {remainingTrailerSize}{' '}cm
    </p>
      }
      
    </>
  );
}
