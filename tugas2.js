const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return b !== 0 ? a / b : "Tidak bisa dibagi dengan nol";
}

console.log("Pilih operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");

rl.question("Masukkan pilihan operasi (1–4): ", function(pilihan) {
  rl.question("Masukkan angka pertama: ", function(input1) {
    rl.question("Masukkan angka kedua: ", function(input2) {
      const angka1 = parseFloat(input1);
      const angka2 = parseFloat(input2);

      let hasil;
      let operasi;

      switch (pilihan) {
        case "1":
          hasil = tambah(angka1, angka2);
          operasi = "Penjumlahan";
          break;
        case "2":
          hasil = kurang(angka1, angka2);
          operasi = "Pengurangan";
          break;
        case "3":
          hasil = kali(angka1, angka2);
          operasi = "Perkalian";
          break;
        case "4":
          hasil = bagi(angka1, angka2);
          operasi = "Pembagian";
          break;
        default:
          console.log("Pilihan tidak valid.");
          rl.close();
          return;
      }

      console.log(`\nOperasi: ${operasi}`);
      console.log(`Angka 1: ${angka1}`);
      console.log(`Angka 2: ${angka2}`);
      console.log(`Hasil: ${hasil}`);
      rl.close();
    });
  });
});
