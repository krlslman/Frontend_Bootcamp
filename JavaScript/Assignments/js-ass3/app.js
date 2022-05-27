console.log('ASSIGNMENT 3 \n\ ------------------------- ');
console.log(`Question 1:  \n\
Fiyatlar dizisinde her bir fiyata %10 zam yapalım. NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.\n\
const fiyatlar = [100, 250, 50, 89]`);

const fiyatlar = [100, 250, 50, 89];

fiyatlar.forEach( (fiyat, indis, dizi) => {
	dizi[indis] = Math.round(fiyat*1.1);
});
console.log(`here is new: ${fiyatlar}`);




console.log(`Question 2:  \n\
Fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.`);

for (let i=0;i<fiyatlar.length;i++) {
	if (fiyatlar[i]>90){
		console.log(fiyatlar[i])
	}
}



console.log(`Question 3:  \n\
Fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.`);
for (let i=0;i<fiyatlar.length;i++) {
	console.log(fiyatlar[i]);
	if (fiyatlar[i]<110){
		fiyatlar[i] = Math.round((fiyatlar[i] * 1.1));
		console.log(fiyatlar[i] + "saasd");	
	}
}
console.log(fiyatlar);


console.log(`Question 4:  \n\
Maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.
\n\
const maaslar = [3000, 5000, 4000, 6000, 6500];`);

const maaslar = [3000, 5000, 4000, 6000, 6500];
const newArrray = maaslar.filter((i) => i<4000).map((i) => i*1.5 );
console.log(newArrray);



console.log(`Question 5:  \n\
Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.`);
const zamSonrasi = maaslar;
const zamSonrasi2 = zamSonrasi.filter((i)=>i>4000).map((i)=>i*1.25)
console.log(zamSonrasi2); 



console.log(`Question 6:  \n\
Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.`);
let maasToplam = 0;
maaslar.forEach((i)=> (maasToplam+=i));
console.log(maasToplam); 