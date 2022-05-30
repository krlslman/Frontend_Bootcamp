console.log('ASSIGNMENT 4 \n\ ------------------------- ');
console.log(`Question 1:  \n\
const maaslar = [3000, 5000, 4000, 6000, 6500];\n\

maaslar dizisi icin maasi ortalamanin altinda olanlara %20 zam yaparak zamli maaslari ayrı bir diziye atalım.`);
const maaslar = [3000, 5000, 4000, 6000, 6500];
const total = 0;
const newArray = maaslar.filter((i)=>i< ((maaslar.map((i)=>total+=i))/maaslar.length)).map((i)=>i*1.2);
// console.log(newArray);

const average = maaslar.map((i)=>total+=i) / maaslar.length
console.log(average);