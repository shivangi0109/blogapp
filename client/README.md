# Steps in front end

* Create a local repo blog with npx create-react-app blog then create a 
frontend folder and cut everything inside frontend folder

* Cd into frontend then checked in local by running npm start

* Create a new repository named blog in github

* Then in local ran git init

* Then git remote add origin  <repository_url>

* Then git add . & git commit -m “Initial commit”

* Then git branch shows master

* Then ran git branch -M main to switch to the main branch

* Then push using git push -u origin main

* Install axios in the client side

# Steps in back end for posts

* Create a posts folder, then go inside the posts folder and run npm init -y

* Then run npm install express cors axios nodemon body-parser dotenv morgan inside the posts folder

* Then create src folder inside posts folder. Inside src folder, create index.js file If needed

* OR directly create index.js file inside posts folder

* IMP - Create .gitnore file under posts folder BEFORE ANY COMMIT and Add node_modules/ & .env into that file

* Copy this line inside package.json file under scripts - "start": "./node_modules/.bin/nodemon -L index.js",

* Then run npm start to check whether posts server is running

* Test on the postman whether you are able to create a new post and get all the posts

* Commit all the changes now

# Repeat the Same Steps in back end for comments

* Create a comments folder, then go inside the comments folder and run npm init -y

* Then run npm install express cors axios nodemon body-parser dotenv morgan inside the comments folder

* Then create src folder inside comments folder. Inside src folder, create index.js file If needed

* OR directly create index.js file inside comments folder

* IMP - Create .gitnore file under comments folder BEFORE ANY COMMIT and Add node_modules/ & .env into that file

* Copy this line inside package.json file under scripts - "start": "./node_modules/.bin/nodemon -L index.js",

* Then run npm start to check whether comments server is running

* Test on the postman whether you are able to create a new comment and get all the comments

* Commit all the changes now


