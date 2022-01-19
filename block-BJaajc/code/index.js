
function getFullName(firstName,lastName){
     return `${firstName} ${lastName}`
}

function isPalindrome(text){
   let reverseText = text.split("").reverse().join("");
   return text === reverseText;
}

function getCircumfrence(radius){
   let circum = 2*Math.PI*radius;
   return `The circumference is ${circum}`;
}

function getArea(radius){
    let area  = Math.PI*radius*radius;
    return `The area is ${area}`;
}

module.exports = getFullName;