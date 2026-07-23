CREATE TABLE IF NOT EXISTS authors (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE,
  stage_name VARCHAR (100),
  birth_year SMALLINT NOT NULL,
  date_of_death SMALLINT,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS books (
  id INT NOT NULL AUTO_INCREMENT,
  author_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  year_of_publication SMALLINT NOT NULL,
  CONSTRAINT fk_books_author FOREIGN KEY (author_id) REFERENCES authors (id),
  PRIMARY KEY (id)
);