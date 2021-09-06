import { erf } from 'mathjs';
import { CDFReturnType, ICdfInputs } from './@types';

export const cdf = ({ x, mean, vol }: ICdfInputs): CDFReturnType => {
  if (!x) {
    throw new Error('Random variable cannot be empty');
  }

  const u: number = mean || 0;
  const sig: number = vol || 1;

  if (sig === 0) {
    return x < u ? 0.0 : 1.0;
  }

  const denom: number = sig * Math.sqrt(2);
  const vc: number = x - u;
  const result: number = 0.5 * (1 + erf(vc / denom));

  return result;
};
