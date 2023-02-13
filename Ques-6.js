//6.Create a function that takes a word and returns true if the word
//has two consecutive identical letters.
 function identicalletters(str){
     let letter = str.match(/([a-z])\1+/)
     if(letter)
     {
         return true
     }
     else{
         return false
     }
    
 }
 let str = "moon"

 console.log(identicalletters(str))
