DROP DATABASE IF EXISTS home_library;
CREATE DATABASE home_library;

USE home_library;

CREATE TABLE user(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(200), password VARCHAR(300), user_type VARCHAR(20));

CREATE TABLE books(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(200), type VARCHAR(100), user_id INT DEFAULT 0, FOREIGN KEY (user_id) REFERENCES user(id));

INSERT INTO user VALUES(0, 'admin', 'test', 'created');
INSERT INTO user VALUES(0, 'sangram', 'test', 'created');
INSERT INTO user VALUES(0, 'kusum', 'test', 'created');
INSERT INTO user VALUES(0, 'sudhakar', 'test', 'created');
INSERT INTO user VALUES(0, 'gouri', 'test', 'created');


INSERT INTO books VALUES(0, 'HP Goblet of fire', 'fiction', 1);
INSERT INTO books VALUES(0, 'HP Chamber of secrets', 'fiction', 1);
INSERT INTO books VALUES(0, 'HP Prisnor of azkaban', 'fiction', 1);
INSERT INTO books VALUES(0, 'HP Order of pheonix', 'fiction', 1);
INSERT INTO books VALUES(0, 'HP Half blood prince', 'fiction', 1);
INSERT INTO books VALUES(0, 'HP Deathly Hallows', 'fiction', 1);
