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

INSERT INTO "users" VALUES(12,'ea511c30-5117-11e5-9f19-51b491a215bc','María Kobak','maria@example.com','maríakobak','$2a$10$uy898DZjgyhssRCmfk3YQupIB4Scax9V4a0WG.sLA4lnDKIk3nGq.',NULL);
INSERT INTO "users" VALUES(13,'14917490-5118-11e5-9f19-51b491a215bc','Susana Kobak','susana@example.com','susanakobak','$2a$10$yJWsk1BHTU5pUkgZ.pkn3ebG5cupN46dY1dIvBsd1I..1ajc8Bsvm',NULL);
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
INSERT INTO "recipes" VALUES(1,'c5409d4e-15eb-456b-a660-e07b3254bb2d','Baked Beans on Toast',NULL,NULL,NULL,NULL,NULL,NULL,0,13,1);
INSERT INTO "recipes" VALUES(2,'c5409d4e-15eb-456b-a660-e08c3254bb2e','French Toast',NULL,NULL,NULL,NULL,NULL,NULL,0,13,1);
INSERT INTO "recipes" VALUES(3,'c5409d4e-15eb-456b-a660-e07b3254cc3f','Sirloin Steak',NULL,NULL,NULL,NULL,NULL,NULL,0,12,1);
INSERT INTO "recipes" VALUES(4,'c5409d4e-15fc-456b-a660-e07b3254bb2w','Roast Potatoes',NULL,NULL,NULL,NULL,NULL,NULL,0,12,0);
DELETE FROM sqlite_sequence;
INSERT INTO "sqlite_sequence" VALUES('users',15);
INSERT INTO "sqlite_sequence" VALUES('recipes',4);
COMMIT;
