const fs = require('fs')

const fileName = process.argv[2];
let myArray = [];

const turnIntoInteger = x => parseInt(x,10);

// asynchronious

// fs.readFile(fileName, 'utf8', (error, data) => {
//   if (error) {
//     console.error(error.message);
//     return;
//   }
//   console.log(data);
//   myArray = data.split(' ').map(elem => turnIntoInteger(elem));
//   console.log(myArray)
//  })

// synchronious

try {
  const data = fs.readFileSync(fileName, 'utf8');
  myArray = data.split(' ').map(elem => turnIntoInteger(elem));
} catch (error) {
  console.error(error.message);
}
console.log(myArray)

// bubble sort

// first bubble sorting method :

// function bubbleSort(arr){
//   var i, j;
//   var len = arr.length;
//   var isSwapped = false;
//   for(i =0; i < len; i++){
//     isSwapped = false;
//     for(j = 0; j < len; j++){
//         if(arr[j] > arr[j + 1]){
//           var temp = arr[j]
//           arr[j] = arr[j+1];
//           arr[j+1] = temp;
//           isSwapped = true;
//         }
//     }
//     if(!isSwapped){
//       break;
//     }
//   }
//   console.log(arr)
// }
// var arr = myArray;
// bubbleSort(arr)


// better bubble sorting method :

let bubbleSort = (arr) => {
  let len = arr.length;
  let checked;
  // to count
  let comparisonCount = 0
  //
  do {
    checked = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        checked = true;
// to count
        comparisonCount = comparisonCount + 1

//
      }
    }
  } while (checked);
  console.log(`Bubble sort needed ${comparisonCount} comparisons to sort this array.`)
  return arr;

};

console.log(bubbleSort(myArray))

// insertion sort

// first method

// const insertionSort = arr =>
//   arr.reduce((acc, x) => {
//     if (!acc.length) return [x];
//     acc.some((y, j) => {
//       if (x <= y) {
//         acc.splice(j, 0, x);
//         return true;
//       }
//       if (x > y && j === acc.length - 1) {
//         acc.splice(j + 1, 0, x);
//         return true;
//       }
//       return false;
//     });
//     return acc;
//   }, []);


// better method

function insertionSort(arr) {
  let n = arr.length;
  // to count
  let comparisonCount = 0
  for (let i = 1; i < n; i++) {
            // Choosing the first element in unsorted subarray
            let current = arr[i];
            // The last element of sorted subarray
            let j = i-1;
            while ((j > -1) && (current < arr[j])) {
              arr[j+1] = arr[j];
              j--;
            }
            arr[j+1] = current;
            // to count
               comparisonCount = comparisonCount + 1
        //
          }
          console.log(`Insertion sort needed ${comparisonCount} comparisons to sort this array.`)
          return arr;
        }
        console.log(insertionSort(myArray))

// selection sort

function selectionSort(arr) {
  let n = arr.length;
  // to count
  let comparisonCount = 0
  for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
          if(arr[j] < arr[min]) {
            min=j;
          }
        }
        if (min != i) {
             // Swapping the elements
             let tmp = arr[i];
             arr[i] = arr[min];
             arr[min] = tmp;
           }
           comparisonCount++
         }
         console.log(`Selection sort needed ${comparisonCount} comparisons to sort this array.`)
         return arr;
       }
       console.log(selectionSort(myArray))

// quick sort

// first method

// function swap(arr, leftIndex, rightIndex){
//     var temp = arr[leftIndex];
//     arr[leftIndex] = arr[rightIndex];
//     arr[rightIndex] = temp;
// }
// function partition(arr, left, right) {
//     var pivot   = arr[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (arr[i] < pivot) {
//             i++;
//         }
//         while (arr[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(arr, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(arr, left, right) {
//     var index;
//     if (arr.length > 1) {
//         index = partition(arr, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(arr, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(arr, index, right);
//         }
//     }
//     return arr;
// }
// // first call to quick sort
// var sortedArray = quickSort(arr, 0, arr.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]

// better method

const quickSort = arr => {
  const a = [...arr];
  if (a.length < 2) return a;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = a[pivotIndex];
  const [lo, hi] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val);
      } else if (val > pivot) {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
    );
  return [...quickSort(lo), pivot, ...quickSort(hi)];
};
console.log(quickSort(myArray))
