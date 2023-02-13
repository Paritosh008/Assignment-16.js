function boomcheck(arr){
    let arsrts = arr.toString()
    //return arsrts
    let strf = arsrts.match(/7/)
    // for(let i =0; i<=arr.length; i++){
    //     let ass = arr[i].toString()
         if(strf){
            return "Boom"
        }
         else{
             return "Not"
         }
    }

let arr= [4,5,6,8,7]
console.log(boomcheck(arr))
