const dilInput = document.querySelector(".diller");
const silBtn = document.getElementById("sil");
const ekleBtn = document.getElementById("ekle");

const dilSection = document.querySelector('#dil-section');
// çünkü queryselector kullanıyorsan ve id seçiyorsan # koymalısın

const ul = document.createElement('ul');
dilSection.appendChild(ul);

console.log(dilSection.children[0]);
console.log(dilSection.parentNode.parentNode);

// parent parnt parent diye üst üste yazmantansa closest foksiyonu kullanılanilir, en yakın ilgili class'ı buluruz;
const h1 = ul.closest('.container').firstElementChild;
console.log(h1);
h1.getElementsByClassName.color = 'red';

const buttons = ul.closest('.container').querySelectorAll('.btn');
console.log(buttons)
// **********


ekleBtn.onclick = function(){
	if(!dilInput.value){
		alert("Lütfen bir dil giriniz");
	} else {
		ul.innerHTML +=` <li>${dilInput.value}</li>`
		// sonrasında input boxı temizleyelim:
		dilInput.value = '';
		javascriptKontrol();
	}
};

const javascriptKontrol = () => {
	document.querySelectorAll("ul li").forEach((dil) => {
		const kucukHarf = dil.textContent.toLowerCase();
		if (kucukHarf==="javascript"){
			dil.className = 'red';
			// Alternatif yöntem:
			// dil.setAttribute('class', 'red');
		}
	});
};

silBtn.onclick = function () {
	ul.childElementCount > 0
		? ul.removeChild(ul.lastElementChild) 
		: alert('Silinecek madde kalmadı');
};

//buradaki i'ler listeye eklenmiş maddelerdir
dilInput.addEventListener('keydown', (i)=> {
	console.log(i);
	if (i.code === 'Enter'){
		ekleBtn.click();
	}
	if(i.code === 'Delete'){
		silBtn.click();
	}
});
// sayfa yüklendiğinde inputbox'a tıklanmış olarak başla:
window.onload = () => {
	javascriptKontrol();
	dilInput.focus();
}