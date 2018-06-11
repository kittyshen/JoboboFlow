DROP DATABASE IF EXISTS joboboflow_db;

CREATE DATABASE joboboflow_db;

USE joboboflow_db;

INSERT INTO Users (user_name, first_name, last_name, password)
VALUES ("tester1","hi","there","123456"),  ("tester2","hi2","there2","123456"), ("tester3","hi3","there3","123456")