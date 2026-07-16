import { pool } from '../../database/connection.js';

export async function insert(author) {
  
  const {name, stage_name, birth_year, date_of_death} = author
  const result =  await pool.query(
    'INSERT INTO authors (name, stage_name, birth_year, date_of_death) VALUES (?, ?, ?, ?)',
    
    [name, stage_name, birth_year, date_of_death]
  );

  return result
}

export async function findAll() {
  const [result] = await pool.query(
    `SELECT * FROM authors`
  );
  return result
}