import mysql from 'mysql';
import { QueryOptions } from "mysql";
import { mysqlConfig } from '@/bin/config';

const pool = mysql.createPool(mysqlConfig);
export const query = (sql: QueryOptions | string, arr: any[]): Promise<any> => {
	return new Promise((resolve, reject) => {
		pool.query(sql, arr, (err, results, fields) => {
			if (err) reject(err);
			resolve(results);
		})
	})
};