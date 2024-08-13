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

* Upgrade the axios verion for compatibilty, whenever started using axios in the backend for comments. See the instructions below.

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

* Upgrade the axios verion for compatibilty, whenever started using axios in the backend for comments. See the instructions below.

# Repeat the Same Steps in back end for event-bus

* Create a event-bus folder, then go inside the event-bus folder and run npm init -y

* Then run npm install express cors axios nodemon body-parser inside the event-bus folder

* Upgrade the axios verion for compatibilty.

* Then create src folder inside event-bus folder. Inside src folder, create index.js file If needed

* OR directly create index.js file inside event-bus folder

* IMP - Create .gitnore file under event-bus folder BEFORE ANY COMMIT and Add node_modules/ & .env into that file

* Copy this line inside package.json file under scripts - "start": "./node_modules/.bin/nodemon -L index.js",

* Then run npm start to check whether event-bus server is running

* Create a get route just to check whether event-bus get route is working correctly

* Commit all the changes now

# If app crashed due to axios in the backend and getting the error 

## Change the version of axios -

The error you're encountering is due to a mismatch between the ECMAScript module system (import/export) and the CommonJS module system (require). Node.js, by default, uses CommonJS, where require is used to load modules. However, it looks like the version of axios installed in your project is using ECMAScript modules, which uses the import statement.

## Solutions - Switch to a Compatible Version of axios:
If you want to stick with the CommonJS syntax, you can install an older version of axios that uses CommonJS instead of ECMAScript modules.

```
npm install axios@0.21.1
```

This version of axios will work with the require statement.

## I have "axios": "^1.7.4", this version installed how to change to the 0.21.1 axios version

## To downgrade the axios package to version 0.21.1, you can follow these steps:

1. ## Uninstall the Current Version of axios:
First, uninstall the current version of axios that's installed in your project.

```
npm uninstall axios
```

2. ## Install the Specific Version of axios:
Now, install the 0.21.1 version of axios:

```
npm install axios@0.21.1
```

3. ## Verify the Installation:
After installation, you can verify that the correct version is installed by checking the package.json file or by running:

```
npm list axios
```

This will install axios@0.21.1, which is compatible with the CommonJS require syntax used in your project.



