//5.Create a function that takes in a number as a string n and returns
//the number without trailing and leading zeros.
// function trailingZero(str){
 let zero = str.replace(/^0+/,'').replace(/.0+$/,'')
 return zero
 }
 let str = "00012345.0000"
 console.log(trailingZero(str));
