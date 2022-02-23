// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Data>
    res: NextApiResponse<Array<Object>>
) {

  res.status(200).json([{ name: 'John Doe',id:'1' },{name:'Pippo Franco',id:'2'}])
}
