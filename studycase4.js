// Berapa berat badan ideal Anda?
// Rumus menghitung
// Pria: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 10%]
// Wanita: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 15%]
// nb = silahkan menggunakan input tinggi yang sama untuk menghitung kedua berat badan ideal.
// Output:
// Berat badan ideal pria untuk tinggi ... sentimeter adalah ... kilogram
// Berat badan ideal wanita untuk tinggi ... sentimeter adalah ... kilogram 


var status = parseInt(prompt('Apakah Anda Pria (1) atau Wanita (2), silahkan pilih angka 1 atau 2 '));

if(status === 1){
    var tinggiBadan = parseInt(prompt('Masukkan tinggi badan Anda dalam sentimeter '))
    beratBadanPria(tinggiBadan);
}else{
    var tinggiBadan = parseInt(prompt('Masukkan tinggi badan Anda dalam sentimeter '))
    beratBadanWanita(tinggiBadan);
}


function beratBadanPria() {
    var hasil = (tinggiBadan - 100) - ((tinggiBadan - 100) * 0.1);
    document.write(`Berat badan ideal dan tinggi ideal pria ${tinggiBadan}sentimeter adalah ${hasil}kilogram`);
}

function beratBadanWanita() {
    var hasil = (tinggiBadan - 100) - ((tinggiBadan - 100) * 0.15);
    document.write(`Berat badan dan tinggi ideal wanita ${tinggiBadan}sentimeter adalah ${hasil}kilogram`);
}