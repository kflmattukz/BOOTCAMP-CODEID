/** buat segitiga  */ 
let result = '';

for (let i = 5; i > 0; i--) {
  for (let j = 1; j < i; j++) {
    result += j +' ' 
  }  
  result +='\n'
} 
console.log(result)

// output 
// 1 2 3 4
// 1 2 3 
// 1 2 
// 1 

let result2 = ''
for (let i = 5; i > 0; i--) {
  for (let j = i; j > 0 ; j--) {
    //console.log(j)
    result2 += j + ' '
  }
  result2 += '\n'
}

console.log(result2)

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

