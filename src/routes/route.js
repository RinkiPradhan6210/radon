const express = require('express');
const { size } = require('lodash');
//const externalModule = require('../logger/logger')
const _ = require('lodash');

//const Tail=require('tail').Tail;
//const Union=require('union');
const router = express.Router();
//const rinki =require('../logger/logger');
const date = require('../util/helper');
const trim = require('../validator/formatter');


router.get('/test-me', function (req, res) {
    res.send('My latest and this first api!')
  //  rinki.welcome()
    date.mydata()
    date.mymonth()
    date.getbatchinfo()
    trim.trim()
    trim.changetoLowerCase()
    trim.changetoUpperCase()
});

//assignment on use of lodash function
router.get('/hello',function(req,res){
    let list=_.chunk(["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],3);
    
    console.log(list)
    //using tail function
    let array=[1,3,5,7,9,11,15,17,19,21]
    let newArray = _.tail(array);
    console.log(newArray)
    
    //using union function
    let mergeArray=_.union([1,2,3],[2,3,4],[5,6,4],[6,4,3],[8,5,4]);
    console.log(mergeArray)
    //fromPairs function
    let finalArray=_.fromPairs([["horror","TheShining"],["drama","Titanic"],["thriller","Shultter Isaland"],["fantacy","Pans Labyrinth"]]);
console.log(finalArray)
    res.send('hello there!')


});
 // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });
  
   // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
 
  
 
module.exports = router;
// adding this comment for no reason
 
  
 