//function declaration
function sapa() {
    console.log('Halo Friend');
}
sapa();  //memanggil fungsi

function sapa2(nama){
    return 'Halo, ${nama}!';
}
console.log(sapa2("Alice"));
sapa2();

const numbers = [10, 20, 30, 40, 50];
numbers.forEach((num, index) => {
    console.log(index *num);
});

//fungsi dalam variabel
const kali = function(a,b){
    return  a * b;
};
console.log(kali(4, 5));

//fungsi deklarasi
function sapa(nama){
    return `Halo, ${nama}!`;
}
 console.log(sapa("Alice"));

 function congrats(birthday){
    return `Happy, ${birthday} Aleena`;
 }
 console.log(congrats("Belated Birthday"));

 function fruit(favFruit){
    return `My Favourite Fruit are ${favFruit}`;
 }
 console.log(fruit("Mango and Orange"));