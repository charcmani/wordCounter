const express = require('express');
const bodyParser = require('body-parser');
const cal = require('./logic');
const fetch = require('node-fetch');
const app = express()

var item=[];
//array to store the final word frequency 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
  res.render('index', {result: null,fre:null, error: null});
  //render index.ejs
})


//handle the post request from form in index.ejs
app.post('/', function (req, res) {
  let n = parseInt(req.body.n, 10);
  //check if the input is an integer
  if (!isNaN(n) && n>=0){
     //check if the input number is greater than the length of items array
     //if yes make n= count of elements in items
     if (n>items.length)n=items.length-1;
      var word=[],value=[];
      //copy the key to word array and value to value array
      for (var i=1;i<=n;i++)
      {
        word.push(items[i][0]);
        value.push(items[i][1]);
      }
      //console.log(word);
      //render index.ejs with required results
      res.render('index',{result:word,fre:value,error:null});
  }
   else{
    console.log("error in input");
    res.render('index', {result: null,fre:null,error: "Opps! you made a tiny terrible mistake please enter positive integer"});
    }
})

//run server on port 3000 and precalculate word frequency for future queries

app.listen(3000, function () {
  console.log('Frequency app listening on port 3000!')

  //fetch text from the give urls 
  fetch('http://terriblytinytales.com/test.txt')
  //.then handle asynch request the code inside this will only execute when the fetch process is complete
  .then(function(response) {
    return response.text();
  })
  .then(function(result){
    var ans = cal.wordFreq(result);  
    // call function wordFreq from logic.js and send the text as a parameter
    // copy the key value pair from map object to item array so it can be sorted accordingly
    items = Object.keys(ans).map(function(key) {
    return [key, ans[key]];
    });
    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    //.catch(err => console.error(err));
   
});
})
