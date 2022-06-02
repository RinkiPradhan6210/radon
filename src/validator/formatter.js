let trim= function(){
    let msg =" RINKI PRADHAN "
    console.log('result after trimming is :=>' +msg.trim());
}
module.exports.trim=trim

let changetoLowerCase = function(){
    let name = "RINKI"
    console.log("converted to lowercase:=>" + name.toLowerCase());
}
module.exports.changetoLowerCase = changetoLowerCase 

let changetoUpperCase = function(){
    let set = "rinki"
    console.log('convert to uppercase:=>' + set.toUpperCase());
}

module.exports.changetoUpperCase = changetoUpperCase