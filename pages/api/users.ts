// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler( req: NextApiRequest,res: NextApiResponse<Array<Object>>
) {
  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port:8889,
    database: "mine"
  });
  
  con.connect(function(err:any) {
    if (err) throw err;
    con.query("SELECT * FROM users", function (err:any, result:any, fields:any) {
      if (err) throw err;
      res.status(200).json(result)
    });
  });

}
