import { dValueReturnType, IDValues } from '../@types';

const d1 = ({ S, K, t, rf, sigma }: IDValues): dValueReturnType => {
  if (!S) {
    throw new Error('Share price cannot be empty');
  }

  if (S < 0) {
    throw new Error('Share price cannot be less than zero');
  }

  if (!K) {
    throw new Error('Strike price cannot be empty');
  }

  if (K < 0) {
    throw new Error('Strike price cannot be less than zero');
  }

  if (!t) {
    throw new Error('Time to expiry cannot be empty');
  }

  if (t < 0) {
    throw new Error('Time to expiry cannot be less than zero');
  }

  if (!rf) {
    throw new Error('Risk-free rate cannot be empty');
  }

  if (rf < 0) {
    throw new Error('Risk-free rate cannot be less than zero');
  }

  if (!sigma) {
    throw new Error('Volatility cannot be empty');
  }

  if (sigma < 0) {
    throw new Error('Volatility cannot be less than zero');
  }

  const numer: number = Math.log(S / K) + (rf + Math.pow(sigma, 2) / 2) * t;
  const denom: number = sigma * Math.sqrt(t);
  const result: number = numer / denom;
  return result;
};

const d2 = ({ S, K, t, rf, sigma }: IDValues): dValueReturnType => {
  if (!S) {
    throw new Error('Share price cannot be empty');
  }

  if (S < 0) {
    throw new Error('Share price cannot be less than zero');
  }

  if (!K) {
    throw new Error('Strike price cannot be empty');
  }

  if (K < 0) {
    throw new Error('Strike price cannot be less than zero');
  }

  if (!t) {
    throw new Error('Time to expiry cannot be empty');
  }

  if (t < 0) {
    throw new Error('Time to expiry cannot be less than zero');
  }

  if (!rf) {
    throw new Error('Risk-free rate cannot be empty');
  }

  if (rf < 0) {
    throw new Error('Risk-free rate cannot be less than zero');
  }

  if (!sigma) {
    throw new Error('Volatility cannot be empty');
  }

  if (sigma < 0) {
    throw new Error('Volatility cannot be less than zero');
  }

  const numer: number = Math.log(S / K) + (rf - Math.pow(sigma, 2) / 2) * t;
  const denom: number = sigma * Math.sqrt(t);
  const result: number = numer / denom;
  return result;
};

export const dValue = {
  d1,
  d2,
};
