let mydata = function(){
    let currentdate = new Date()
    console.log('the current date is'+ currentdate);
}
module.exports.mydata = mydata


let mymonth = function(){
    let currentmonth = new Date()
    console.log('the current month is'+ currentmonth);
} 

module.exports.mymonth = mymonth

let getbatchinfo = function(){
    console.log("Radon, w3d3,the the topic for today is Nodejs module system");
}
module.exports.getbatchinfo = getbatchinfo 