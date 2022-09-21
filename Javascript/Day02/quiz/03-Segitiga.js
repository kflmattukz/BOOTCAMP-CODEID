/** buat segitiga  */ 

let result = ''

for (let i = 0; i < 6; i++) { // tidak mengubah loop pertama yg telah di sediakan
  for (let j = 1; j < 5 - i; j++) {
    result += j + ' '
  }
  result += '\n'
}
console.log(result)
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

result2 = ''
for (let i = 0; i < 6; i++) { //// tidak mengubah loop pertama yg telah di sediakan
  for (let j = 5 - i; j > 0; j--) {
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


