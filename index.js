
//1 find the second highest number in the array
function secondHighestNum(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num === first || num === second) continue;
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second) {
      second = num;
    }
  }
  return [first, second];
}
console.log(secondHighestNum([1, 2, 3, 4, 22, 42, 42, 23]));

//2 using for..loop 
function findSecondHighest(arr) {
  if (arr.length < 2) return null; // Ensure there are at least two elements
  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      secondHighest = highest; // Update second highest before highest
      highest = arr[i];
    } else if (arr[i] > secondHighest && arr[i] < highest) {
      secondHighest = arr[i];
    }
  }

  return secondHighest === -Infinity ? null : secondHighest;
}
console.log(findSecondHighest([3, 5, 1, 7, 5, 9])); // Output: 7

//3 find the kth largest number in the array
function kthLargestElem(arr, k = 1) {
  return [...new Set(arr)].sort((a, b) => b - a)[k - 1];
}
console.log(kthLargestElem([1, 2, 3, 4, 22, 42, 42, 23], 3));

//4 find the highest number using for..of method
function higestNum(arr) {
  let max = -Infinity;
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
console.log(higestNum([1, 20, 3, 4, 22, 42, 42, 23]));

//5 using reduce method
function higestReduce(arr) {
  return arr.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  }, 0);
}
console.log('reduce-->', higestReduce([1, 20, 3, 4, 22, 42, 42, 23]));

// 5 sort the array acceding order  for alredy swap array
function sortArray(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;  // Reset the swapped flag for this pass
    for (let j = 0; j < arr.length - 1 - i; j++) {  // Decrease the range of comparison
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Swap elements
        swapped = true;  // Mark that a swap occurred
      }
    }
    if (!swapped) break;  // If no swaps happened, the array is sorted
  }
  return arr;
}

// 6 sort array using  the temp variable
function sortArrayTemp(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(sortArrayTemp([2, 1, 3, 4, 3, 2]));



console.log(sortArray([2, 1, 3, 4, 3, 2]));  // Output: [1, 2, 2, 3, 3, 4]

//7 Check if Array is Sorted
function checkArraySorted (arr){
  let isSorted =false
  for (let i=0; i<arr.length-1;i++){
    if(arr[i] < arr[i+1]){
      isSorted=true
    }else{
      isSorted=false
    }
  }
  return isSorted ?"array is sorted":"array is not sorted"
}
console.log(checkArraySorted([2,3, 7, 3, 2 ])); // Output: [ 4, 5, 7, 3, 2 ]


//8 remove/find the duplicate using the for..of
function findDuplicateArray(arr) {
  let duplicate = [];
  let removed = [];
  for (let num of arr) {
    if (!duplicate.includes(num)) {
      duplicate.push(num);
    } else {
      removed.push(num);
    }
  }
  return [duplicate, removed];
}
console.log(findDuplicateArray([2, 1, 3, 3, 4, 4, 3, 2]));

// using reduce method
function removeDuplicate(arr) {
  return arr.reduce(
    (acc, curr) => {
      if (!acc.removed.includes(curr)) acc.removed.push(curr);
      else acc.unique.push(curr);
      return acc;
    },
    { removed: [], unique: [] }
  );
}
console.log(removeDuplicate([2, 1, 3, 3, 4, 4, 3, 2]));

//9 find the duplicate of the array 
function findDuplicates(array) {
  const elementCount = {}; 
  const duplicates = [];  
  for (const element of array) {
      elementCount[element] = (elementCount[element] || 0) + 1;
  }
  for (const element in elementCount) {
      if (elementCount[element] > 1) {
          duplicates.push(Number(element)); 
      }
  }

  return duplicates;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5, 1, 2, 1])); // Output: [1, 3]

//10 most duplicate using the for of
function findMostDuplicate(nums) {
  const countMap = {};  
  for (const num of nums) {
      countMap[num] = (countMap[num] || 0) + 1;
  }
  let mostDuplicateValue = null;
  let maxCount = 0;

  for (const [key, value] of Object.entries(countMap)) {
      if (value > maxCount) {
          mostDuplicateValue = key;
          maxCount = value;
      }
  }

  return mostDuplicateValue;
}

//11 most duplicate using the for of
function findMostDuplicateValue(arr) {
  let countObj = {};
  let mostDuplicateValue = null;
  let maxCount = 0;
  for (let num of arr) {
    countObj[num] = (countObj[num] || 0) + 1;
    if (countObj[num] > maxCount) {
      mostDuplicateValue = num;
      maxCount = countObj[num];
    }
  }
  return mostDuplicateValue;
}
console.log(findMostDuplicateValue([2, 3, 3, 7, 3, 4, 4])); // Output: 3



//11 find the majorit of the elemnt
function majorityElem(arr) {
  let obj = {};
  let majority = Math.floor(arr.length / 2);
  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1; // Initialize to 0 if undefined, then increment

    if (obj[num] > majority) {
      return num; // If the count exceeds majority, return the element
    }
  }
  return 'no majority'; // No majority element found
}
console.log(majorityElem([2, 3, 3, 7, 3, 4, 4])); // Output: 3


//12 reverse the arrary with out using the inbuilt method
function reverseArray(arr){
  let reverse=[]
    for(let num of arr){
      reverse.unshift(num)
    }
    return reverse
}
console.log(reverseArray([2, 3, 7,5,4])); // Output: [ 4, 5, 7, 3, 2 ]


//12 using the for loop
function reverseArrayFor(arr){
   let reverse=[]
    for (let i=arr.length-1;i>=0; i--){
      reverse.push(arr[i])
    }
    return reverse
}
console.log(reverseArrayFor([2,3, 7,5,4])); // Output: [ 4, 5, 7, 3, 2 ]


//12 find the frequacy of the elment  in the array
function freqArray(arr) {
  const obj = {};
  for (let num of arr) {
    obj[num] = obj[num] + 0 || 1;
  }
  return obj;
}
console.log(freqArray([20, 20, 20, 42, 42, 23]));


//13 moves all zero at end of array
 function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return arr;
}
console.log(moveZerosToEnd([0, 1, 2, 0, 3, 4, 0])); // Output: [1, 2, 3, 4, 0, 0, 0]


//13 using the fill method
function moveZerosToEnd(arr) {
  let count = 0;
  let updated = [];
  for (let num of arr) {
    if (num === 0) {
      count++;
    } else {
      updated.push(num);
    }
  }
  updated.length = arr.length; // Set length to match the original array
  updated.fill(0, updated.length - count); // Fill zeros at the end
  return updated;
}
console.log(moveZerosToEnd([0, 3, 0, 5, 4])); // Output: [3, 5, 4, 0, 0]

//14 find the missing number of the array 
function findMissingNumber(arr) {
  const n = arr.length + 1;   // const n = Math.max(...arr);  
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3


//15 find the number is availbale 
function findNumber(arr,k){
      return arr.find((val)=> val === k)
}

console.log(findNumber([1, 2, 4, 5, 6],9)); // Output: 3

//16 Problem: Find all unique elements present in two arrays.
//   Example: Input: [1, 2, 3], [2, 3, 4], Output: [1, 2, 3, 4]
function findUniqueValue(arr1,arr2){
  let update= [...arr1,...arr2]
    return [...new Set(update)]
}
console.log(findUniqueValue([1, 2, 3], [2, 3, 4])); // Output: 3

//17 using the for loop 
 function findUniqueArrFor(arr1,arr2){
     for (let num of arr2){
      if(!arr1.includes(num)){
        arr1.push(num)
      }
     }
     return arr1
 }
 console.log("22-->",findUniqueArrFor([1, 2, 3], [2, 3, 4])); // Output: 3


//18  Problem: Find common elements between two arrays.
//  Example: Input: [1, 2, 3], [2, 3, 4], Output: [2, 3]
function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// const setA = new Set([1, 2, 3, 4, 5, 6]);
// const setB = new Set([2, 4, 6, 8, 10]);
// const intersectionSet = setA.intersection(setB);
// console.log(intersectionSet);   // Set {2, 4, 6}




 
