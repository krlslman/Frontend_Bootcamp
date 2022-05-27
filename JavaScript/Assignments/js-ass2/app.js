console.log('ASSIGNMENT 2 \n\ ------------------------- ');
console.log(`Question 1:  \n\
Convert long link to shorter one. \n\
https://www.youtube.com/watch?v=b7vfp5G4brE => https://youtu.be/b7vfp5G4brE `)
const str = 'https://www.youtube.com/watch?v=b7vfp5G4brE';
const index = str.indexOf('=')
const result = "https://youtu.be/" + str.slice(index+1)
console.log(`Here is the short link: ${result}`)
