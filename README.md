# Introducing the SHAN stack: Sqlite Hapi Angular Node (prestige and honor)

Example SHAN recipe database app

## Installing a minimum environment toolset

* Install [NodeJS](https://nodejs.org/), which includes the Node Package Manager [NPM](https://www.npmjs.com/), by visiting the homepage and clicking on the install button in order to download and install the latest binary for your operating system.
* Install the DVCS (distributed version control system) [Git](https://git-scm.com/) which also has binary packages for all operating systems on its homepage. Learn Git immediately by reading at least the first three chapters of the free online [Git Book](https://git-scm.com/book/en/v2)

## Global dependencies for testing throughout the course

Tools local to our app (like the Karma test runner) are automatically included locally when you provision your static server with the `npm install` command (see below). But as we'll see it's convenient to install the karma command-line interface globally as well:

````
npm install -g karma-cli
````

That way you don't have to execute `./node_modules/karma/bin/karma start` every time you run your tests. You can just do `karma`.

And we'll install `bower`, another package manager very commonly used in JavaScript projects.

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

````
npm install
gulp dev
npm start (or node index.js)
````

In this repo I'm integrating my very own recipejs example with Matt Harrison's from his book Hapi.js In Action
