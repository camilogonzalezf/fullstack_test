CREATE DATABASE usersdb;

CREATE TABLE usergit(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255) NOT NULL UNIQUE ,
    userid VARCHAR(255) NOT NULL,
    followers INTEGER
);

