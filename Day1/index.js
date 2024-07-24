console.log("Hello world");
var name = "Karan";
console.log(name);

var age= 26.1;
console.log(typeof age);

var ary = [11, "22", 33, 44, 55];
// console.log(typeof ary);  // to be continue...

// ary.push(11);
// console.log(ary);
// console.log(ary[2]);
// console.log(ary.length);

//Todo to remove the 1st element, last element and in between

ary.pop(ary[1]);
// ary.splice(0, 1);
// console.log(ary);
ary.shift(ary[1]);

console.log(ary)

var obj = {
    name: "karan",
    age: "101",
    country: "India",
}

delete obj.age;

console.log(obj);


