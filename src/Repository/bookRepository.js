import { pool } from '../../database/connection.js';

export async function insertBook(book) {
  const { title, year_of_publication, author_id } = book
  const [result] = await pool.query(
    `INSERT INTO books (title, year_of_publication, author_id)
    VALUES (?, ?, ?)`,

    [title, year_of_publication, author_id]
  );

  return result;
}

export async function findAll(){
  const [result] = await pool.query(
    `SELECT * FROM books`
  );
  return result
}

export async function findByidAuthor(book) {
  const { author_id, title } = book
  const [rows] = await pool.query(
    `
      SELECT author_id, title
      FROM books
      where author_id = ? AND title = ?
    `,
    [author_id, title]
  );
  return rows[0]
}

export async function findById(id) {
  const [rows] = await pool.query(
    `
    SELECT id
    from books
    where id = ?`,
    [id]
  )
  return rows[0]
}

export async function updateBook (id, data) {
  const { author_id, title, year_of_publication } = data
  const [result] = await pool.query(
    `
    UPDATE books
    SET author_id = COALESCE(?, author_id), 
    title = COALESCE(?, title), 
    year_of_publication = COALESCE(?, year_of_publication)
    where id = ?`,
    [author_id || null, title || null, year_of_publication|| null, id]
  );
  return [result][0]
}

export async function deleteBook(id) {
  const [result] = await pool.query(
    `
    DELETE FROM books
    WHERE id = ?`,
    [id]
  );
  return result
}