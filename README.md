# ctf-api

a [Sails](http://sailsjs.org) application


## Setup

* Run NPM install
* Setup your database in postgres (The dev settings are in config/connections.js, you can either create that DB / user or use someting else and override in your config/local.js file, up to you).
* sails lift


## Usage
GET /location to view all locations
POST /location to create 
GET /location/nearby to find nearby locations
* lat is your latitude (required)
* lng is your longitude (required)
* radius is how far away to look in  miles (defaults to 50)
* limit is the max number of rows to return (defaults to 10)
Ex /location/nearby?lat=43.775549&lng=-87.835192