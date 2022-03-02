<h1>Shutter</h1>
<a href="https://codeclimate.com/github/YohannTisserand/shutter-express/maintainability"><img src="https://api.codeclimate.com/v1/badges/a33cf5d965dd1f24c7e7/maintainability" /></a>
APP IN PROGRESS - last updated 2/3/2022

## Planning and Approach
### User Stories


- I would like to sign up to the website
- I would like to login.
- I would like to be able to upload photos
- I would like to be able to see the locations of the photos
- I would like to see everything I've posted 
- I would like to see the locations pinned on a map

## How to use

```
$ git clone https://github.com/YohannTisserand/shutter-express.git
$ cd shutter-express
$ npm install
```
Install <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/">mongoDB</a> depending on your OS

Alternatively, to get some content (that is supposed to exists already(mostly random generated photos, which is the core purpose of the app)), create an account at <a href="https://unsplash.com/developers">Unsplash developers</a> and ask for an instant API <a href="https://unsplash.com/oauth/applications">here</a>, then copy paste it into the /seeds/index.js file.

```
nodemon server.js
localhost:3000
```

## Tech Stack

- <a href="https://expressjs.com/">Express</a>
- <a href="https://www.mongodb.com/">mongoDB</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://nodejs.org/en/">Node.js</a>
- <a href="https://en.wikipedia.org/wiki/HTML5">HTML</a>
- <a href="https://en.wikipedia.org/wiki/CSS">CSS</a>
- <a href="https://getbootstrap.com/">Bootstrap</a>
