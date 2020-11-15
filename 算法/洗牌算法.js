function shuffle(arr) {
  let newArr = [];
  while(arr.length != 0) {
    let rand = Math.floor(Math.random() * arr.length);
    newArr.push(arr[rand]);
    arr.splice(rand, 1);
  }
  return newArr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6]))