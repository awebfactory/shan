PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE users (
  id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  uuid varchar(255) NOT NULL,
  full_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  username varchar(255),
  password varchar(255) NOT NULL,
  token varchar(255)
);
INSERT INTO "users" VALUES(1,'bde057a8-95f4-431f-a39f-d34c13cecea9','Victor','victor@example.com',NULL,'1234',NULL);
INSERT INTO "users" VALUES(2,'bde057a7-9521-431a-b39f-d34c13aecea9','Vicente','vicente@example.com',NULL,'1234',NULL);
CREATE TABLE "recipes" (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`uuid`	varchar(255) NOT NULL,
	`name`	varchar(255) NOT NULL,
	`cooking_time`	varchar(255) DEFAULT (NULL),
	`prep_time`	varchar(255) DEFAULT (NULL),
	`serves`	int(11) DEFAULT (NULL),
	`cuisine`	varchar(255) DEFAULT (NULL),
	`ingredients`	text,
	`directions`	text,
	`stars`	int(11) NOT NULL DEFAULT ('0'),
	`user_id`	int(11) NOT NULL,
	`new`	INTEGER,
	FOREIGN KEY(`user_id`) REFERENCES users ( id ) ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "recipes" VALUES(1,'c5409d4e-15eb-456b-a660-e07b3254bb2d','Baked Beans on Toast',NULL,NULL,NULL,NULL,NULL,NULL,0,1,1);
INSERT INTO "recipes" VALUES(2,'c5409d4e-15eb-456b-a660-e08c3254bb2d','French Toast',NULL,NULL,NULL,NULL,NULL,NULL,0,1,1);
INSERT INTO "recipes" VALUES(3,'c5409d4e-15eb-456b-a660-e07b3254cc3e','Sirloin Steak',NULL,NULL,NULL,NULL,NULL,NULL,0,2,1);
INSERT INTO "recipes" VALUES(4,'c5409d4e-15fc-456b-a660-e07b3254bb2d','Roast Potatoes',NULL,NULL,NULL,NULL,NULL,NULL,0,2,0);
DELETE FROM sqlite_sequence;
INSERT INTO "sqlite_sequence" VALUES('users',2);
INSERT INTO "sqlite_sequence" VALUES('recipes',4);
COMMIT;
