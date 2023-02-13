//7.ATM machines allow 4 or 6 digit PIN codes and PIN codes
//cannot contain anything but exactly 4 digits or exactly 6 digits. Your

//task is to create a function that takes a string and returns true if the
//PIN is valid and false if it's not.
//Examples
//validatePIN("1234") ➞ true
function machinesallow(str){
let machine = str.match(/\b[0-9]{4}\b|\b[0-9]{6}\b/gm)

if(machine)
{
    return true
}
else{
    return false
}

}

let str = "123456"
console.log(machinesallow(str))
