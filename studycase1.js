var bil1 = parseInt(prompt('Masukkan nilai bilangan pertama '));
var bil2 = parseInt(prompt('Masukkan nilai bilangan kedua '));

function tambah(){
    document.write('hasil penjumlahan kedua bilangan adalah : ' + (bil1 + bil2) + '<br>')
}

function kurang(x,y){
    var hasilKurang = x-y;
    document.write('Pengurangan kedua bilangan : ' + hasilKurang+ '<br>')
}

var hasilPerkalian  = function(x,y){
    return x*y;
}

var hasilBagi = function(x,y){
    return x/y
}

function sisaHasilBagi(x,y){
    return x%y;
}

tambah();
kurang(bil1,bil2);
