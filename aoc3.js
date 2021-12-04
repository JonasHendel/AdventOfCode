const input = require('./input3.json')


//const binaries = [
  //"00100",
  //"11110",
  //"10110",
  //"10111",
  //"10101",
  //"01111",
  //"00111",
  //"11100",
  //"10000",
  //"11001",
  //"00010",
  //"01010",
//];

const binaries = input.array

console.log(binaries[0].split(""));

let array = [];

binaries.map((binary) => {
  array.push(binary.split(""));
});

let gamma = []
let eps = []

for (let i = 0; i < array[0].length; i++) {
  let ones = 0
  let zeros = 0
  array.map((a) => {
    if(a[i]==0){
      zeros++;
    }else{
      ones++;
    }
})  
  if(ones > zeros){
    gamma.push('1')
    eps.push('0')
  }else{
    gamma.push('0')
    eps.push('1')
  }
}

const getBinary = (array) => {
  let num = 0
  array.map((digit, index)=>{
    const pow = array.length - (index+1)
    num += digit*(2**pow) 
  })
  return(num)
}
const gammaNum = getBinary(gamma)

const epsNum = getBinary(eps)

const powerCons = epsNum*gammaNum

console.log(powerCons)
