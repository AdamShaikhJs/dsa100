// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

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

//2 find the kth largest number in the array
function kthLargestElem(arr, k = 1) {
  return [...new Set(arr)].sort((a, b) => b - a)[k - 1];
}
console.log(kthLargestElem([1, 2, 3, 4, 22, 42, 42, 23], 3));

//3 find the highest number in the array
function higestNum(arr) {
  let max = -Infinity;
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
console.log(higestNum([1, 20, 3, 4, 22, 42, 42, 23]));

//4 find the higest numbe using reduce
function higestReduce(arr) {
  return arr.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  }, 0);
}
console.log('reduce-->', higestReduce([1, 20, 3, 4, 22, 42, 42, 23]));

//4  find the frequacy of the elment  in the array
function freqArray(arr) {
  const obj = {};
  for (let num of arr) {
    obj[num] = obj[num] + 1 || 1;
  }
  return obj;
}
console.log(freqArray([20, 20, 20, 42, 42, 23]));

// 5 sort the array acceding order
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log(sortArray([2, 1, 3, 4, 3, 2]));

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

//7 remove/find the duplicate value in the array
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

//8 remove duplicat using reduce method
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

//9 find the majorit of the elemnt
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

//10 most duplicate
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
