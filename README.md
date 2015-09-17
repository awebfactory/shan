# Introducing the SHAN stack: Sqlite Hapi Angular Node (prestige and honor)

Example SHAN recipe database app

## Global dependencies

* Install the DVCS (distributed version control system) [Git](https://git-scm.com/) which also has binary packages for all operating systems on its homepage. Learn Git immediately by reading at least the first three chapters of the free online [Git Book](https://git-scm.com/book/en/v2)
* Install [NodeJS](https://nodejs.org/), which includes the Node Package Manager [NPM](https://www.npmjs.com/), by visiting the homepage and clicking on the install button in order to download and install the latest binary for your operating system.
* Install [bower](http://bower.io/), the front end package manager.

`npm install -g bower`

## Quick Start

### Clone repo

````
git clone https://github.com/awebfactory/shan.git
cd shan
````

### Create database


* Install command line interface for sqlite
  * `sudo apt-get install sqlite3 libsqlite3-dev`
  
From the project document root:

* Create sqlite database
  * `sqlite3 data/recipes.sqlite < data/db.sql`
* If you wish to save the database to an sql file, simply do:
  * `sqlite3 data/recipes.sqlite .dump > data/db.sql`


### Provision and run app

Note: bower front end dependencies will automatically be provisioned via the initial `npm install` command:

````
npm install
gulp dev
npm start (or node index.js)
````

or, to use browser-sync on the current browser (will automatically pull up the browser window at port 8080):

````
npm install
gulp dev-watch
````

If slow coming up initially, reload, and then when you save any changes in sass or js files in the `src` directory, gulp will selectively re-process and browser-sync will update the browser automatically via socket.io (no Chrome extension needed) so you don't have to reload each time.

In this HapiJS based example I'm basing myself on my own ExpressJS based [recipejs example](https://github.com/victorkane/recipe-js) I've used several times in the past, it seems to be a popular example subject these days :) 

