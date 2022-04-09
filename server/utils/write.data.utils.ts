import fs from 'fs';
import path from 'path';

/**
 * 
 * @param data string that need to store to data.txt file
 */
export async function writeData(data: string) {
  const filePath = path.join(__dirname, '../data/strings.data.txt');
  await fs.promises.writeFile(filePath, data, {
    encoding: 'utf8',
  });
}
