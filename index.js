  function knightMoves(start, end){
    const moves = [[1,2],[2,1],[-1,2],[2,-1],[-2,1],[1,-2],[-2,-1],[-1,-2]];
    const queue = [[start]]
    const visited = new Set([start.toString()]);

    while(queue.length > 0){
      const path = queue.shift();
      const[x, y] = path[path.length - 1];

      if(x === end[0] && y === end[1]){
        console.log(`You made it in ${path.length - 1} moves, here is your path:`);
        path.forEach(pos => console.log(pos));
         return path;
      }
          for(const [dx,dy] of moves){
      const newX = x + dx;
      const newY = y + dy;
      if(newX >= 0 && newX < 8 && newY >=0 && newY < 8){
        const newPos = [newX, newY];
        if(!visited.has(newPos.toString())){
          visited.add(newPos.toString());
          queue.push([...path, newPos])
        }
      }
      
    }
    }
    return[]
  }

  knightMoves([0,0],[7,7])







