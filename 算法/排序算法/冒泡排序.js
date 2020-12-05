// 时间复杂度O(n2)
function BubbleSort(arr) {
  let len = arr.length;
  for(let i = 0; i < len - 1; i++) {
    for(let j = 0; j < len - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}



let arr = [7,9,5,3,0,1,3,4];
console.log(BubbleSort(arr))