CREATE TABLE users (
    id serial NOT NULL PRIMARY KEY,
    username text NOT NULL UNIQUE,
    email text NOT NULL UNIQUE,
    first_name text NOT NULL,
    last_name text NOT NULL,
    password text NOT NULL
);
INSERT INTO users (username, email, first_name, last_name, password) VALUES ('potato', 'big_potato@potatomail.com', 'Oleksandr', 'Lukashenko', 'tastyPotato1994')