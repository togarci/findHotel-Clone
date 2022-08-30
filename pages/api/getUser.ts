// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  username: string,
  name: string,
  token: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'GET') {
    let data = {
      'username': 'Togarci',
      'name': 'Thyago Odorico Garcia',
      'token': 'da23423bbhj&*$#234ddas',
    }
    res.status(200).json(data);

  } else {
    res.status(400).json(undefined);
  }
}
