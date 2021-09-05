export type CDFReturnType = number;

export interface ICdfInputs {
  x: number;
  mean?: number;
  vol?: number;
}

export type dValueReturnType = number;

export interface IDValues {
  S: number;
  K: number;
  t: number;
  rf: number;
  sigma: number;
}

export type OptionPriceReturnType = number;

export interface IOptionPrice {
  S: number;
  K: number;
  t: number;
  rf: number;
  sigma: number;
  type: 'call' | 'put';
}

export interface IBisection {
  seekValue: number;
  lowStartVolatility: number;
  highStartVolatility: number;
  tolerance: number;
  iterations: number;
  fn(volatility: number): number;
}

export type ImpliedVolatilityReturnType = number;

export interface IImpliedVolatility {
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
