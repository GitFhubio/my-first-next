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
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function(err: any, db:any) {
    if (err) throw err;
    var dbo = db.db("mongodb");
    dbo.collection("items").findOne({}, function(err:any, result:any) {
      if (err) throw err;
      res.status(200).json(result)
      db.close();
    });
  });
  

}
