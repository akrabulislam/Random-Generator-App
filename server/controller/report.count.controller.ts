import { Request, Response } from 'express';
import { getCount } from '../utils/store.object.count.utils';

/**
 * 
 * @param req null
 * @param res count object
 */
export async function report(req: Request, res: Response) {
  try {
    const result = getCount();
    res.status(200).json({ sucess: true, data: result });
  } catch (error) {
    res.status(500).json({ sucess: false, error: 'Internal server error' });
  }
}
