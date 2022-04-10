export interface frequency {
  alphabetic: number;
  alphanumerics: number;
  integers: number;
  realNumber: number;
}

let count: frequency = {
  alphabetic: 0,
  alphanumerics: 0,
  integers: 0,
  realNumber: 0,
};

export const initiateCount = () => {
  count.alphabetic = 0;
  count.alphanumerics = 0;
  count.integers = 0;
  count.realNumber = 0;
};

/**
 * 
 * @param freq update the count object
 */
export const updateCount = (freq: frequency) => {
  count = freq;
};

/**
 * 
 * @returns count
 */
export const getCount = () => {
  return count;
};
