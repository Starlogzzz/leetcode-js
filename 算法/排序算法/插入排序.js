// 时间复杂度O(n2)
function insertSort(arr) {
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    let preIndex = i - 1;
    let cur = arr[i];
    while(preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = cur;
  }
  return arr;
}

let arr = [6,7,2,3,8,1,0,5]
console.log(insertSort(arr))
