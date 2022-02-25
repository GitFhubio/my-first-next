// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { route } from 'next/dist/server/router';
import { Router } from 'next/router';
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
    if(req.method !== 'POST'){
    con.query("SELECT * FROM users", function (err:any, result:any, fields:any) {
      if (err) throw err;
      res.status(200).json(result)
    });
  }
  else if (req.body.action && req.body.action == "delete") {
    con.query(`delete from users where id = '${req.body.id}'`, function (err:any, result:any, fields:any) {
      if (err) throw err;
      // res.status(200).json(result)
    });

  }
  
  else
  {

    con.query(`update users set role = '${req.body.role}' where id = '${req.body.id}'`, function (err:any, result:any, fields:any) {
      if (err) throw err;
      // res.status(200).json(result)
    });

  }
  });
}
