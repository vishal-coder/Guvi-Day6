//1. Fix the code to get the largest of three.
aa = (f, s, t) => {
  /**
 *error : The symbol "f" has already been declared
 Solution : commenting below line solved issue
 */
  //let f, s, t;  //
  console.log(f, s, t);
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};

//2.Fix the code to Sum of the digits present in the number

//1. Fix the code to get the largest of three.
aa = (f, s, t) => {
  /**
   *error : The symbol "f" has already been declared
   Solution : commenting below line solved issue
   */
  //let f, s, t;  //
  console.log(f, s, t);
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};

//2.Fix the code to Sum of the digits present in the number

let n = 123;
let strNum = String(n); // converting number to String
let len = n.toString().length; // taking length of number in string format
console.log(add(n));
function add(n) {
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += Number(strNum[i]); // converting to number
  }
  return sum;
}

//3.Fix the code to Sum of all numbers using IIFE function

const arr = [9, 8, 5, 6, 4, 3, 2, 1];

(function () {
  let sum = 0;
  //changed <= to <  and removed ; after for()
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
})(arr);

//4. Fix the code to gen Title caps.

let arr1 = ["guvi", "geek", "zen", "fullstack"];
let ano = function (arro) {
  // changed i <= length  to i < length
  for (let i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
  }
};
ano(arr1); // passed array here

//5.Fix the code to return the Prime numbers

const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // changed to false
    }
  }
  return true; //changed to true
});
console.log(myPrime);

//6.Fix the code to sum the number in that array
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = (a, b) => a + b;
const sumArr = num.reduce(sum); //renamed const to sumArr
console.log(sumArr);

//7. Fix the code to rotate an array by k times and return rotated array using IIFE function

let arr2 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
let k = 3;
//k = arr.length % k;
(function () {
  // out = [];

  let length = arr2.length;
  for (let i = 0; i < k; i++) {
    let last = arr2[0];
    for (let j = 0; j < length; j++) {
      arr2[j] = arr2[j + 1]; // updated code
    }
    arr2[length - 1] = last; // updated code
  }
  console.log(arr2);
})(arr2);

//8.Fix the code to gen Title caps. = below is fixed code

let arr3 = ["guvi", "geek", "zen", "fullstack"];
(function () {
  // changed <= to <
  for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i][0].toUpperCase() + arr3[i].slice(1)); // added slice and corrected indexing
  }
})();

//9.print all odd numbers in an array using IIFE function

let arr4 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] % 2 !== 0) {
      // !== condition added
      console.log(arr4[i]);
    }
  }
})();

//10. Fix the code to reverse.

(function (str) {
  str = str.split("").reverse().join(""); // split() corrected &&  hanged str1 to str
  console.log(str);
})("abcd");

//11.Fix the code to remove duplicates.
let res = function (arr) {
  let newArr = []; //moved here from inside of for loop
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}; //added;
res(["guvi", "geek", "zen", "fullstack"]);

/**
 *12. Fix the code to give the below output:
  Expected Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]

 */
//changed code is as follows :
let array = [
  [
    ["firstname", "vasanth"],
    ["lastname", "Raje"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstname", "Sri"],
    ["lastname", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];
let final = [];
while (array.length != 0) {
  let outer_remove = array.shift();
  let obj = {};

  while (outer_remove.length != 0) {
    let inner_remove = outer_remove.shift();
    let key = inner_remove[0];
    let value = inner_remove[1];
    obj[key] = value;
  }
  final.push(obj);
}
console.log(final);

//13. Sum of odd numbers in an array

let as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
let s = as.reduce(function (a, c) {
  if (c % 2 != 0) {
    return a + c;
  }
  return a;
}, 0); //added initial value as 0
console.log(s);

// 14. Swap the odd and even digits

aa = (data) => {
  var a = data;
  var l = "";
  for (let i = 0; i < a.length; i++) {
    var s = a[i + 1];
    var b = a[i];
    l += s;
    l += b;
    i = i + 1;
  }
  if (a.length % 2 != 0) {
    l += a[a.length - 1];
  }
  console.log(l);
};
aa("1234");
