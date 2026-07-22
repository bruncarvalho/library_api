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