// 时间复杂度O(nlogn)
function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let mergeLeftArray = mergeSort(left);
  let mergeRightArray = mergeSort(right);
  return merge(mergeLeftArray, mergeRightArray);
}

function merge(left, right) {
  let result = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while(left.length) {
    result.push(left.shift())
  }
  while(right.length) {
    result.push(right.shift())
  }
  return result;
}

let arr = [1,9,5,6,7,2,1,5];
console.log(mergeSort(arr))
