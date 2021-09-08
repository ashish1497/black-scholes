export interface IBisection {
  seekValue: number;
  lowStartVolatility: number;
  highStartVolatility: number;
  tolerance: number;
  iterations: number;
  fn(volatility: number): number;
}

export const bisection = (params: IBisection) => {
  const {
    fn,
    highStartVolatility,
    iterations,
    lowStartVolatility,
    seekValue,
    tolerance,
  } = params;

  let _a = lowStartVolatility;
  let _b = highStartVolatility;
  // let iterRun = 0;

  // if (iterRun > iterations) {
  //   return null;
  // }

  for (let i = 0; i < iterations; i++) {
    // iterRun += 1;
    const c = (_a + _b) / 2;
    const y = fn(c);
    const error = Math.abs(y - seekValue);

    if (error === 0 || error < tolerance || (_b - _a) / 2 < tolerance) {
      return c;
    }

    if (y > seekValue) {
      _b = c;
    } else {
      _a = c;
    }
  }
};
