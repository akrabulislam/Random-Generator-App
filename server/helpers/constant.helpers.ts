
/**
 * This following variables contains regex for match alphabetic string
 */
export const alphabeticStringRegex = /^[A-Za-z]+$/;

/**
 * 
 * @param minimum minimum number
 * @param maximum maximum number
 * @returns random value between these two range
 */
export const getARandomNumberOfGivenRange = (minimum: number, maximum: number) => {
  let min = minimum;
  let max = maximum;
  return Math.floor(Math.random() * (max - min + 1) + min);
};
