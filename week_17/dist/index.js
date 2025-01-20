"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client("postgresql://postgres:mysecretpassword@localhost:5432/postgres");
// client.connect().then(()=>{
//     console.log("connected to postgres")
// }).catch((e)=>{
//     console.log(e)
// })
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50),
    salary NUMERIC(10, 2),
    hired_on DATE DEFAULT CURRENT_DATE
  );
`;
const insertDataQuery = `
  INSERT INTO employees (name, position, salary)
  VALUES
    ('Alice Johnson', 'Software Engineer', 75000.00),
    ('Bob Smith', 'Project Manager', 85000.00),
    ('Charlie Brown', 'Designer', 65000.00),
    ('Daisy Adams', 'QA Engineer', 70000.00)
  RETURNING *;
`;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log('Connected to PostgreSQL');
            // Create table
            yield client.query(createTableQuery);
            console.log('Table created');
            // Insert data
            const res = yield client.query(insertDataQuery);
            console.log('Inserted rows:', res.rows);
        }
        catch (err) {
            console.error('Error executing query');
        }
        finally {
            yield client.end();
            console.log('Connection closed');
        }
        //   console.log(res.rows)
    });
}
run();
