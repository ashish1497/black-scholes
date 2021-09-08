import { optionPrice, IOptionPrice } from './optionPrice';
import { bisection, IBisection } from './utils/bisection';

type ImpliedVolatilityReturnType = number;

interface IImpliedVolatility {
  S: number;
  K: number;
  t: number;
  rf: number;
  derivativePrice: number;
  type: 'call' | 'put';
  lowStartVol?: number;
  highStartVol?: number;
  tolerance?: number;
  iteration?: number;
}

export const impliedVolatility = (
  params: IImpliedVolatility,
): ImpliedVolatilityReturnType => {
  const {
    K,
    S,
    derivativePrice,
    rf,
    t,
    type,
    highStartVol,
    lowStartVol,
    tolerance,
    iteration,
  } = params;

  if (!K || !S || !derivativePrice || !rf || !t) {
    throw new Error('Required fields were left empty');
  }

  const fn = (volatility: number) => {
    const optionParams: IOptionPrice = {
      S: S,
      K: K,
      rf: rf,
      sigma: volatility,
      t: t,
      type: type,
    };
    const price: number = optionPrice(optionParams);

    return price;
  };

  const bisectParams: IBisection = {
    seekValue: derivativePrice,
    fn: fn,
    highStartVolatility: highStartVol || 5,
    lowStartVolatility: lowStartVol || 0.01,
    iterations: iteration || Math.pow(10, 3),
    tolerance: tolerance || Math.pow(10, -5),
  };
  const y = bisection(bisectParams);

  return y;
};
