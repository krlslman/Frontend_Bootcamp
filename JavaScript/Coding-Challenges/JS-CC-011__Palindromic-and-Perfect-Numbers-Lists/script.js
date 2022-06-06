// pseudocode
// - take inputs
// - split ==> convert to array
// - compare  arr and reverse.arr


// //! Palindrome

const minNum = 0;
const maxNum = 34;


for (let i = minNum; i < maxNum; i++) {

    const strI = String(i).split(``);

    
    if (strI.join() === strI.reverse().join()){
        console.log(`${i} is a palindrome number`)
    };
};


//! Perfect Number
//! 1. yöntem
// pseudocode
// for aralık
    // for aralık2
        //   mod == 0 sa arraye pushla

//    ! reduce.toplam == i 



for (let i = minNum; i < maxNum; i++) {

  if(checkPerfect(i)) {
      console.log(i)
  }; 
};


function checkPerfect (i) {
    if(i === 0){
        return false;
    };
    let divisor = [];
    for (let ii = 1; ii < i; ii++) {
        if (i % ii === 0) {
        divisor.push(ii);
        };
    };
    // console.log(divisor);
    return divisor.reduce((x,y) => x+y,0) === i;
}


//! 2. Yöntem

// function checkPerfectNumber(inputNumber) {
//     if (inputNumber === 0) {
//       return false;
//     }
//     let sum = 0;
//     for (let i = 1; i < inputNumber; i++) {
//       if (inputNumber % i == 0) {
//         sum += i;
//       }
//     }
//     if (sum == inputNumber) {
//       return true;
//     }
//     return false;
//   }