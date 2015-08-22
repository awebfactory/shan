# Introducing the SHAN stack: Sqlite Hapi Angular Node (prestige and honor)

Example SHAN recipe database app

## Quick Start

### Clone repo

````
git clone https://github.com/awebfactory/shan.git
cd shan
````

### Create database

* Install command line interface for sqlite
  * `sudo apt-get install sqlite3 libsqlite3-dev`
* Create sqlite database
  * `sqlite3 data/recipes.sqlite < data/db.sql`

### Provision and run app

````
npm install
gulp dev
npm start (or node index.js)
````

In this repo I'm integrating my very own recipejs example with Matt Harrison's from his book Hapi.js In Action
