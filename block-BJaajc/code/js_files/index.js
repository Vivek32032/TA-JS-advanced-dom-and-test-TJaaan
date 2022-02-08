
function getFullName(firstName,lastName){
     return `${firstName} ${lastName}`
}

function isPalindrome(text){
   let reverseText = text.split("").reverse().join("");
   return text === reverseText;
}

function getCircumference(radius){
   let circum = Math.floor(2*Math.PI*radius);
   return `The circumference is ${circum}`;
}

function getArea(radius){
    let area  = Math.floor(Math.PI*radius*radius);
    return `The area is ${area}`;
}

module.exports = {getFullName,isPalindrome,getCircumference,getArea};