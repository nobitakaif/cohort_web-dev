import { Client } from "pg";

const client = new Client("postgresql://postgres:mysecretpassword@localhost:5432/postgres")
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

async function run() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');

    // Create table
    await client.query(createTableQuery);
    console.log('Table created');

    // Insert data
    const res = await client.query(insertDataQuery);
    console.log('Inserted rows:', res.rows);
  } catch (err) {
    console.error('Error executing query' );
  } finally {
    await client.end();
    console.log('Connection closed');
  }
//   console.log(res.rows)
}

run();