# Introducing the SHAN stack: Sqlite Hapi Angular Node (prestige and honor)

Example SHAN recipe database app

## Global dependencies

* Install [NodeJS](https://nodejs.org/), which includes the Node Package Manager [NPM](https://www.npmjs.com/), by visiting the homepage and clicking on the install button in order to download and install the latest binary for your operating system.
* Install the DVCS (distributed version control system) [Git](https://git-scm.com/) which also has binary packages for all operating systems on its homepage. Learn Git immediately by reading at least the first three chapters of the free online [Git Book](https://git-scm.com/book/en/v2)
* And we'll install `bower`, another package manager very commonly used in JavaScript projects.

````
npm install -g bower
````

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

Note: bower front end dependencies will automatically be provisioned via the initial `npm install` command:

````
npm install
gulp dev
npm start (or node index.js)
````

In this repo I'm integrating my very own recipejs example with Matt Harrison's from his book Hapi.js In Action
