//2.) Create a function that finds the word "happiness" in the given
//string (not case sensitive). If found, return "Hurray!", otherwise
//return "There is no happiness

 let str = "You give me the feeling of happiness"
 function findword(str){

 var a =str.match(/happiness/g);
 if(a){

 return "Hurray"
 }
 else{
     return "There is no happiness."
 }


 }
 console.log(findword(str));
