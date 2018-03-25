# Word Counter

The webapp is built on nodejs and its task is to take an integer N as an input and display the top N most frequent words from the text file provided at http://terriblytinytales.com/test.txt

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The web app is hosted on heroku visit : https://word-counter-3000.herokuapp.com/

### Prerequisites

What things you need to install the software and how to install them\

install nodejs if you dont have it already. Download : https://nodejs.org/en/download

Once nodejs is installed , install the following packages 
```
$ npm install --save express
$ npm install ejs --save
$ npm install body-parser --save
$ npm install node-fetch --save
```

### Installing

Once the above packages are installed open terminal from the project folder and run:


```
node server.js
```
It should print the following on the terminal
```
Frequency app listening on port 3000!
```
After this  open localhost:3000

### File system
```
|-- wordCounter
   |-- views
      |-- index.ejs
   |-- public
      |-- css
         |-- style.css
   |-- package.json
   |-- server.js
   |-- login.js
```
### index.ejs

This file is used to create dynamic html pages , it is responsible for the frontend of the application

### style.css

This file is the stylesheet used in index.ejs

### package.json

This Json file contains all the information about the project like author name, packages used etc.

### server.js

This file is the heart of the whole application and is used to run the server, handle request and send response once the response is generated. It uses function from logic.js to calculate the frequency of words,then it sends the top N words as response.

### logic.js

This file contains a function wordFreq() that takes string as an input, it breaks the string into words and calculates their frequency using a map(key-value pair) and returns the map to server.js



