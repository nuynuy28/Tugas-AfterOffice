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
