let bfs = root => {
  const q = [root];
  while(q.length > 0) {
    const n = q.shift();
    console.log(n.val);
    n.children.forEach(child => {
      q.push(child)
    })
  } 
}