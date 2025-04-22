
// if, else
let age = 18;
 if (age > 18){
    console.log("Anda sudah dewasa")
 } else if (age == 18){
    console.log("Anda baru saja remaja");
}   else {
    console.log("Anda masih anak anak");
}


//switch statement
let day = "Senin";

switch(day){
    case "Senin":
        console.log("Hari ini adalah Senin");
        break;
    case "Selasa":
        console.log("Hari ini adalah Selasa");
        break;
    default:
        console.log("Hari tidak dikenali");

}

let bulan ="September";

switch(bulan){
    case "September":
        console.log("Saya lahir di bulan September");
        break;
    case "Oktober":
        console.log("Saya lahir dibulan Oktober");
        break;
    default:
}



//looping
for (let i = 0; i < 5; i++){
    console.log("Perulangan ke "+i);
}

let j = 0;
while (j < 5){
    console.log("Perulangan ke "+j);
    j++;
}


//while loop
let count = 1;
while (count <=3){
    console.log(`Hitungan: ${count}`);
count ++;
}

let number = 0;
while (number <= 4){
    console.log(`Urutan nomor: ${number}`);
number++
}