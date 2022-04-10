import { Request, Response } from 'express';
import { writeData } from '../utils/write.data.utils';
import { getARandomNumberOfGivenRange, alphabeticStringRegex } from '../helpers/constant.helpers';
import { updateCount, getCount, initiateCount } from '../utils/store.object.count.utils';

/**
 *
 * @param req null
 * @param res strings.data.txt
 */
export async function generate(req: Request, res: Response) {
  try {
    initiateCount();
    let generatedString = await generateObjects(0, 2097152);
    await writeData(generatedString);
    res.status(200).json({ success: true, data: 'Generate Successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}

/**
 *
 * @param index number of characters taken
 * @param range how many character need to store in the txt file
 * @returns generatedObjectsOutput (123,laodi1,aodood,89.9....)
 */
function generateObjects(index: number, range: number) {
  let generatedObjectsOutput = '';
  while (index < range) {
    // 1 = strings (alphanumerics / alphabetic)
    // 2 = real numbers (integers / fractions)
    let type = getARandomNumberOfGivenRange(1, 2);
    let singeObjectOutput = type == 1 ? generateStrings(index, range) : generateRealNumbers(index, range);

    generatedObjectsOutput += singeObjectOutput;

    //increase index
    index += singeObjectOutput.length;

    //add ',' and ' ' after each string
    generatedObjectsOutput += index < range ? ',' : '';
    index++;
    generatedObjectsOutput += index < range ? ' ' : '';
    index++;
  }
  return generatedObjectsOutput;
}

/**
 *
 * @param base 10 to generate only number (0,1,2,3,4..,9) , 36 for number and alphabets (0,1,2,..a,b,..z)
 * @param length size of the string
 * @param randomString generated string
 * @returns string
 */
const generateRandomStringOfGivenLength: Function = function (base: number, length: number, randomString: string = '') {
  randomString += Math.random().toString(base).substr(2, length);
  if (randomString.length > length) return randomString.slice(0, length);
  return generateRandomStringOfGivenLength(base, length, randomString);
};

/**
 *
 * @param index number of characters taken
 * @param range how many character need to store in the txt file
 * @returns length (<= range)
 */
function getASafeLength(index: number, range: number) {
  //returning a random length from 1 to 10
  let length = getARandomNumberOfGivenRange(1, 10);
  return index + length < range ? length : range - index;
}

/**
 *
 * @param index number of characters taken
 * @param range how many character need to store in the txt file
 * @returns stringOutput (ex : akdueja , adie1334...)
 */
function generateStrings(index: number, range: number) {
  // generate a string of a random length
  //ex : aoduid,48akdrofof..
  let stringOutput = generateRandomStringOfGivenLength(36, getASafeLength(index, range));
  //check alphabetic or alphanumeratics
  if (stringOutput.match(alphabeticStringRegex) != null) {
    updateCountObject('alphabetic');
  } else {
    updateCountObject('alphanumeric');
  }
  return stringOutput;
}

/**
 *
 * @param index number of characters taken
 * @param range how many character need to store in the txt file
 * @returns realNumberOutput (ex : 12345 , 0.12938...)
 */
function generateRealNumbers(index: number, range: number) {
  // generate a number string of a random length
  // ex: 217329312937,2938
  let realNumberOutput = generateRandomStringOfGivenLength(10, getASafeLength(index, range));

  //remove leading zeros
  realNumberOutput = parseInt(realNumberOutput,10).toString();

  //if empty return
  if(!realNumberOutput.length) return realNumberOutput;

  //increase real number
  updateCountObject('realnumber');

  //take a random number 1 or 2
  //if 1 make it integer
  //if 2 and length > 2 make it fractional

  let type = getARandomNumberOfGivenRange(1, 2);
  if (type === 1) {
    updateCountObject('integer'); // 12344595,93834739
  } else {
    if (realNumberOutput.length > 2) {
      // now add . in a random position to make it fractional
      let dotplace = getARandomNumberOfGivenRange(1, realNumberOutput.length - 2); //remove first and last place
      realNumberOutput = realNumberOutput.substr(0, dotplace) + '.' + realNumberOutput.substr(dotplace + 1);
    } else {
      updateCountObject('integer'); // 12344595,93834739
    }
  }
  return realNumberOutput;
}

/**
 *
 * @param type alphabetic,alphanumeric,integer,realnumber
 */
function updateCountObject(type: string) {
  let count = getCount(); // get previous count
  switch (type) {
    case 'alphabetic':
      count.alphabetic += 1;
      break;
    case 'alphanumeric':
      count.alphanumerics += 1;
      break;
    case 'integer':
      count.integers += 1;
      break;
    case 'realnumber':
      count.realNumber += 1;
      break;
  }
  updateCount(count);
}
