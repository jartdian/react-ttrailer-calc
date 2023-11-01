import { useState } from 'react';

export default function Inputs( {trailer_length_size} : {trailer_length_size:number} ) {

  const [countBlocksStraight, setCountBlocksStraight] = useState('');
  const straightBlocksAsNumber = Number(countBlocksStraight);
  const [countBlocksSideways, setCountBlocksSideways] = useState('');
  const sidewaysBlocksAsNumber = Number(countBlocksSideways);
  const [countEurosStraight, setCountEurosStraight] = useState('');
  const straightEurosAsNumber = Number(countEurosStraight);
  const [countEurosSideways, setCountEurosSidways] = useState('');
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

  return (
    <>
      <u>
        <h3 style={{ color: 'lightgreen' }}>Semi-trailer</h3>
      </u>
      <p>
        <u>Blocks</u>
      </p>
      Straight{' '}
      <input
        style={{ width: '3.5em' }}
        type="number"
        name="blocks-straight"
        value={straightBlocksAsNumber}
        onChange={(e) => setCountBlocksStraight(e.target.value)}
      />{' '}
      {closestBlockLength} cm
      <br />
      Sideways{' '}
      <input
        style={{ width: '3.5em' }}
        type="number"
        name="blocks-sideways"
        value={sidewaysBlocksAsNumber}
        onChange={(e) => setCountBlocksSideways(e.target.value)}
      />{' '}
      {closestBlockWidth} cm
      <hr />
      <p>
        <u>Euros</u>
      </p>
      Straight{' '}
      <input
        style={{ width: '3.5em' }}
        type="number"
        name="euros-straight"
        value={straightEurosAsNumber}
        onChange={(e) => setCountEurosStraight(e.target.value)}
      />{' '}
      {closestEuroLength} cm
      <br />
      Sideways{' '}
      <input
        style={{ width: '3.5em' }}
        type="number"
        name="euros-straight"
        value={sidewaysEurosAsNumber}
        onChange={(e) => setCountEurosSidways(e.target.value)}
      />{' '}
      {closestEuroWidth} cm
      <hr />
      <p>
        Total N of Palettes:{' '}
        {straightBlocksAsNumber +
          straightEurosAsNumber +
          sidewaysBlocksAsNumber +
          sidewaysEurosAsNumber}
      </p>
      <p>
        Total Length of Palettes:{' '}
        {closestEuroLength +
          closestEuroWidth +
          closestBlockWidth +
          closestBlockLength}
      </p>
      <p>
        Remaining Length:{' '}
        {trailer_length_size -
          (closestEuroLength +
            closestEuroWidth +
            closestBlockWidth +
            closestBlockLength)}{' '}
        cm
      </p>
    </>
  );
}

