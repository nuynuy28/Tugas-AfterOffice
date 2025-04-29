function kategoriUsia(usia){
    if (usia >=0 && usia <=12){
        return "Anak-anak";
    }
    else if (usia >=13 && usia <=17){
        return "Remaja";
    }
    else if (usia >=18 && usia<=59){
        return "Dewasa";
    }
    else if (usia >= 60){
        return "Lansia"
    }
    else{
        return "usia tidak valid";
    }
}

const daftarUsia = [8, 10, 15, 25, 45, 56, 65];

const hitungKategori ={
    "Anak-anak": 0,
    "Remaja": 0,
    "Dewasa": 0,
    "Lansia":0,
};

for (let i = 0; i < daftarUsia.length; i++){
    const usia = daftarUsia[i];
    const kategori = kategoriUsia(usia);

    if (hitungKategori.hasOwnProperty(kategori)){
        hitungKategori[kategori]++;
    
    }else{
        console.log(`Usia tidak valid: ${usia}`);
    }
    
}

console.log("Kategoriny adalah sebagai berikut:");
console.log(`Anak-anak: ${hitungKategori["Anak-anak"]} orang`);
console.log(`Remaja: ${hitungKategori["Remaja"]} orang`);
console.log(`Dewasa: ${hitungKategori["Dewasa"]} orang`);
console.log(`Lansia ${hitungKategori["Lansia"]} orang`);


