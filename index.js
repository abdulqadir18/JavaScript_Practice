//printing in js and console api
console.log("Hello World");
console.warn("Hello Warning");
console.error("Hello Error");
// alert("Page is safe");

//variables
var num1=2;
var num2=3;
var sum=num1+num2;
console.log("Num1 is",num1);
console.log("Num2 is",num2);
console.log("Sum is",sum);

//numbers
var number1=56;
var number2=782.43;
console.log(number1);
console.log(number2);

//string
var str1="this is a string";
var str2='this is also a string';
console.log(str1);
console.log(str2);

//objects
var marks={
  abdul:99,
  mumi:87,
  papa:79
}
console.log(marks);

//boolean;
var T=true;
var F=false;
console.log(T);
console.log(F);

//undefined
var und1=undefined;
var und2;
console.log(undefined);
console.log(und1);
console.log(und2);

//null
var no=null;
console.log(null);
console.log(no);

//arrays
var arr=[1,2,"hello",3,4];
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

//function
function add(a,b){
  c=a+b;
  return c;
}

console.log(add(3,4));

//if else
let age=18;
if(age>18)
{
  console.log("Adult");
}
else if(age==18)
{
  console.log("Teen");
}
else
{
  console.log("Kid");
}

//loops
let arr1=[1,2,3,4,5,6,7];

//for loop
for(let i=0; i<arr1.length; i++)
{
  console.log(arr1[i]);
}

//for each loop
arr1.forEach(function(element)
{
  console.log(element);
})

//while loop
let j=0;
while(j<arr1.length)
{
  console.log(arr1[j]);
  j++;
}
