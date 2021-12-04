const input = require('./input1.json')

const{array}=input


const checkIfNumberWentUp = () => {
  let prevNum = null
  let increased = 0
  let decreased = 0

  array.map((item)=>{
    if(prevNum){
      item > prevNum ? increased++ : decreased++;
    }
      prevNum = item
  })
  return {increased, decreased}
}

const result = checkIfNumberWentUp()

console.log(result)
