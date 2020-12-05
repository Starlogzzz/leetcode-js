// 时间复杂度O(nlogn)
function quickSort(arr) {
  let left_arr = [];
  let right_arr = [];
  let middle = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < middle) {
      left_arr.push(arr[i])
    } else {
      right_arr.push(arr[i])
    }
  }
  if (left_arr.length >= 2) left_arr = quickSort(left_arr);
  if (right_arr.length >= 2) right_arr = quickSort(right_arr);

  return left_arr.concat(middle, right_arr)
}



let arr = [1, 9, 5, 0, 1, 100]

console.log(quickSort(arr))