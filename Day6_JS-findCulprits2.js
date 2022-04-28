//1.Write a code to print the numbers in the array
//Output: 1234567891011
console.log("1.Write a code to print the numbers in the array");
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_string = "";

for (let i = 0; i < numsArr.length; i++) {
  //change initialization, increament , length
  new_string += numsArr[i];
}
console.log(new_string);

//2.Write a code to print the numbers in the array
//Output: 1,2,3,4,5,6,7,8,9,10,11
console.log("\n2.Write a code to print the numbers in the array");
let numsArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_string1 = "";

//changed initialization, length
for (let i = 0; i < numsArr.length; i++) {
  new_string += numsArr[i] + ",";
}

//added condition to check "," at end of string
console.log(
  new_string.endsWith(",")
    ? new_string.substring(0, new_string.length - 1)
    : new_string
);

/**
 * 3. Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
 * Output: 11 10 9 8 7 6 5 4 3 2 1
 */
console.log(
  "\n3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)"
);
let numsArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_string2 = "";
// change initialization, compare condition and decrement
for (let i = numsArr2.length - 1; i >= 0; i--) {
  new_string2 += numsArr2[i] + " ";
}
console.log(new_string2.endsWith(" ") ? new_string2.trimEnd() : new_string2);

/**
 * 4. Write a code to replace the array value — If the number is even, replace it with ‘even’.
 * Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
 */
console.log(
  "\n4.Write a code to replace the array value — If the number is even, replace it with ‘even’."
);
let numsArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// changed for loop conditions
for (let i = 0; i < numsArr3.length; i++) {
  if (numsArr3[i] % 2 == 0) {
    numsArr3[i] = "even"; // changed to odd
  }
}
console.log(numsArr3);

/**
 * 5. Write a code to replace the array value — If the index is even, replace it with ‘even’.
 * Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
 */
console.log(
  "\n5.Write a code to replace the array value — If the index is even, replace it with ‘even’."
);
let numsArr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// changed for loop conditions
for (let i = 0; i < numsArr4.length; i++) {
  if (i % 2 == 0) {
    numsArr4[i] = "even";
  }
}
console.log(numsArr4);

/**
 * 6. Write a code to add all the numbers in the array
 * Output: 66
 */
console.log("\n6.Write a code to add all the numbers in the array");
let numsArr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0;
for (let i = 0; i < numsArr5.length; i++) {
  sum += numsArr5[i];
}
console.log(sum);
/**
 * 7.Write a code to add the even numbers only
Output: 30
 */
console.log("\n7.Write a code to add the even numbers only");
let numsArr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum2 = 0;
for (let i = 0; i < numsArr6.length; i++) {
  if (numsArr6[i] % 2 == 0) sum2 += numsArr6[i];
}
console.log(sum2);

/**
 * 8. Write a code to add the even numbers and subract the odd numbers
Output: 94
 */
console.log(
  "\n8.Write a code to add the even numbers and subract the odd numbers"
);
let numsArr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum3 = 100;
for (let i = 0; i < numsArr7.length; i++) {
  if (numsArr7[i] % 2 == 0) {
    sum3 += numsArr7[i];
  } else {
    sum3 -= numsArr7[i];
  }
}
console.log(sum3);

/**
 * 9.Write a code to print inner arrays
Output:Array(5) [ 1, 2, 3, 4, 5 ]
Array(6) [ 6, 7, 8, 9, 10, 11 ]
 */
console.log("\n9.Write a code to print inner arrays");
var numsArr8 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
for (var i = 0; i < numsArr8.length; i++) {
  console.log(numsArr8[i]);
}

/**
 * 10.Write a code to print elements in the inner arrays
Output: 1234567891011
 */
console.log("\n10.Write a code to print elements in the inner arrays");
var numsArr9 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var str_all = "";
for (let i = 0; i < numsArr9.length; i++) {
  for (let j = 0; j < numsArr9[i].length; j++) {
    str_all += numsArr9[i][j];
  }
}
console.log(str_all);

/**
 * 11.Write a code to replace the array value — If the index is even, replace it with ‘even’.
 * Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
 */
console.log(
  "\n11.Write a code to replace the array value — If the index is even, replace it with ‘even’."
);
var numsArr10 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
let currentIndex = 0;
for (let i = 0; i < numsArr10.length; i++) {
  for (let j = 0; j < numsArr10[i].length; j++) {
    if (currentIndex % 2 == 0) numsArr10[i][j] = "Even";
    currentIndex++;
  }
}
console.log(numsArr10);

/**
 * 12. Write a code to print elements in the inner arrays in reverse
Output: 11 10 9 8 7 6 5 4 3 2 1
 */
console.log(
  "\n12.Write a code to print elements in the inner arrays in reverse"
);
let numsArr11 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
let str_all2 = "";
for (var i = numsArr11.length - 1; i >= 0; i--) {
  var inner_array = numsArr11[i];
  for (var j = inner_array.length - 1; j >= 0; j--)
    str_all2 += inner_array[j] + " ";
}
console.log(str_all2);
/**
 * 13. Write a code to add elements in the inner arrays based on odd or even values
Output:
36
30
 */
console.log(
  " Write a code to add elements in the inner arrays based on odd or even values"
);
var numsArr12 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr12.length; i++) {
  var inner_array = numsArr12[i];
  for (var j = 0; j < inner_array.length; j++) {
    if (inner_array[j] % 2 != 0) {
      sum_odd += inner_array[j];
    } else {
      sum_even += inner_array[j];
    }
  }
}
console.log(sum_odd);
console.log(sum_even);
