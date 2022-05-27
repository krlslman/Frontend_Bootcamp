console.log('ASSIGNMENT1');
console.log('Question 1:  \n\
Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.')

const taban = +prompt('Taban uzunluğu giriniz (cm)');
const yukseklik = +prompt('Taban uzunluğu giriniz (cm)');
const alan = alanHesaplama(taban, yukseklik);
alert(`Ucgenin alani: ${alan} `)

function alanHesaplama(taban,yukseklik) {
 return (taban*yukseklik) / 2;
}

 
console.log('Question 2:  \n\
kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndürmeli gerekmektedir.')

const kareAl = (n) => n*n;
const kupAl = (n) => n*n*n;
const usAl = (t,u) => t**u;

console.log('KARE:', kareAl(4));
console.log('KUP:', kupAl(3));
console.log('US:', usAl(2, 3));


console.log(`Question 3:  \n\
Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression yöntemi ile yazınız. \n\n\ NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.`)

const leapYear = (year) => {
	result =  year%4==0 && ( year%100!=0 || year%400==0);
	return result ? `${year} is a leap year` : `${year} is NOT a leap year`;
	};
	console.log(leapYear(2000));
	console.log(leapYear(2001));
	console.log(leapYear(2004));