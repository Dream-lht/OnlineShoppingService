import connection from "../app/database";
import { QueryError, FieldPacket } from "mysql2";
function servicePromise(sql: string, values: any): Promise<[unknown]> {
  return new Promise((resolve, reject) => {
    connection.query(
      sql,
      values,
      (err: QueryError | null, results: any, fields: FieldPacket[]) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
}

export default servicePromise;
