import { pool } from '../../database/connection.js';

export async function insert(author) {
  
  const {name, stage_name, birth_year, date_of_death} = author
  const [result] =  await pool.query(
    'INSERT INTO authors (name, stage_name, birth_year, date_of_death) VALUES (?, ?, ?, ?)',
    
    [name, stage_name, birth_year, date_of_death]
  );

  return result
}

export async function findAll() {
  const result = await pool.query(
    `SELECT * FROM authors`
  );
  return result
}

export async function findByName(name) {
  const rows = await pool.query(
    `SELECT name 
    FROM authors
    where name = ?`,
    [name]
  );
  return rows
}

export async function findById(id) {
    
  const rows = await pool.query(
    `SELECT id
    from authors
    where id = ?`,
    [id]
  )
  return rows[0]
}

export async function updateAuthor(id, dados) {
  const {name, stage_name, birth_year, date_of_death} = dados
  const result = await pool.query(
    `
    UPDATE authors 
    SET name = COALESCE(?, name), 
    stage_name = COALESCE(?, stage_name), 
    birth_year = COALESCE(?, birth_year), 
    date_of_death = COALESCE(?, date_of_death) 
    where id = ?
    `,
    [name || null, stage_name || null, birth_year|| null, date_of_death || null, id]
  );
  return result
}