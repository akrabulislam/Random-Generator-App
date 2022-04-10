import {Request, Response } from 'express';
import path from 'path';

/**
 * 
 * @param req null
 * @param res donwload the data.txt file
 */
export async function download(req: Request, res: Response) {
  try {
    const filePath = path.join(__dirname, '../data/strings.data.txt');
    res.status(200).download(filePath);
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
