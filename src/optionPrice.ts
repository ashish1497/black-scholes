import { cdf } from './cdf';
import { dValue } from './dValues';

type OptionPriceReturnType = number;

export interface IOptionPrice {
  S: number;
  K: number;
  t: number;
  rf: number;
  sigma: number;
  type: 'call' | 'put';
}

export const optionPrice = (params: IOptionPrice): OptionPriceReturnType => {
  const { K, S, rf, sigma, t, type } = params;

  if (!K || !S || !rf || !sigma || !t || !type) {
    throw new Error('All values are required');
  }

  const optionObject = {
    S: S,
    K: K,
    t: t,
    rf: rf,
    sigma: sigma,
  };

  if (type === 'call') {
    const firstPart = cdf({ x: dValue.d1(optionObject) }) * S;
    const secondPart =
      cdf({ x: dValue.d2(optionObject) }) * K * Math.exp(-(rf * t));

    const price: number = firstPart - secondPart;

    return price;
  } else if (type === 'put') {
    const firstPart =
      cdf({ x: -dValue.d2(optionObject) }) * K * Math.exp(-(rf * t));
    const secondPart = cdf({ x: -dValue.d1(optionObject) }) * S;

    const price: number = firstPart - secondPart;

    return price;
  } else {
    throw new Error('Unknown option type');
  }
};
