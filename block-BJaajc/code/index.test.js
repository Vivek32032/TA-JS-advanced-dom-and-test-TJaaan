
const {getFullName,isPalindrome,getCircumference,getArea} = require("./index");

test('Vivek and Kumar gives Vivek Kumar', () =>{
    expect(getFullName("Vivek","Kumar")).toBe("Vivek Kumar")
})


test('Vivek and Kumar gives Vivek Kumar', () =>{
    expect(getFullName("Vivek"," Kumar")).not.toBe("Vivek Kumar")
})

test('abba gives true',() => {
    expect(isPalindrome("abba")).toBe(true);
})

test('abba gives true',() => {
    expect(isPalindrome("abba ")).not.toBe(true);
})

test("Circumference with radius 5 is 31",()=>{
    expect(getCircumference(5)).toBe('The circumference is 31')
})
test("Circumference with radius 5 is 31",()=>{
    expect(getCircumference(5.0)).not.toBe('The circumference is 31.0')
})

test("Area with radius 5 is 78",()=>{
    expect(getArea(5)).toBe('The area is 78')
})
test("Area with radius 5 is 78",()=>{
    expect(getArea(5.0)).not.toBe('The area is 78.0')
})