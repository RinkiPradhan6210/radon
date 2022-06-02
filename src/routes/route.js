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
module.exports = router;
// adding this comment for no reason