// 时间复杂度O(n2)
function selectSort(arr) {
  let len = arr.length;
  let temp = 0;

  for(let i = 0; i < len - 1; i++) {
    temp = i;
    for(let j = i + 1; j < len; j++) {
      if(arr[j] < arr[temp]) temp = j;
    }
    if(temp !== i) {
      [arr[i], arr[temp]] = [arr[temp], arr[i]]
    }
  };
  return arr;
}


let arr = [5,9,7,3,5,1,0];
console.log(selectSort(arr))