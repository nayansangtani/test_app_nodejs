Step - 1 => take a clone from github repositry (git clone https://github.com/nayansangtani/test_app_nodejs.git)

step - 2 => Open mysql tool(workbench or any other) and create database, below is the query to create db
CREATE DATABASE demo_db;

step - 3 => now create table "tasks" in the database, below is the query to create the table

CREATE  TABLE IF NOT EXISTS `tasks` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `status` enum('open','in_progress','completed') default 'open' NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

step - 4 => now open terminal from the project directory and run command "npm i", this will install all the dependencies.

step - 5 => now run command "npm start", this will start a server on local machine and you can now access the APIs on "http://localhost:5000".

Thanks 