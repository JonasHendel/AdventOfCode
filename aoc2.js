const input = require('./input2.json')
//const commands = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2" ]

const commands = input.array

let horizontal = 0
let depth = 0

const getNum = (string) => {
  return Number(string.split(" ")[1])
}

commands.map((command)=>{
  const units = getNum(command) 
  if(command.includes("forward")){
    horizontal += units
  }else if(command.includes("down")){
    depth += units
  }else if(command.includes("up")){
    depth -= units
  }
})

console.log({horizontal, depth})

console.log(horizontal*depth)

