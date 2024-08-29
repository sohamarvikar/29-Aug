var str = "mango, banana, apple, cashew, kiwi";
console.log(str.length);

console.log(str.slice(-12, -10));

console.log(str.substring(2, 10));

var str1 = str.replace('mango', 'fruit1');
console.log(str);
console.log(str1);

var arr = ['a', 'b', 'c'];
arr[0] = 'd';
console.log(arr);

var str = "  Mango, ";
var str2 = "something, ";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str2.trim().concat(str.trim()));

var a = "123";
var test1 = a.padStart(5, '0');
var test2 = a.padEnd(5, '0');
console.log(test1);
console.log(test2);
