var nilai=parseInt(prompt('contoh2 nilai mahasiswa','0-100'))

nilaiPeserta = function(nilai) {
var hasil

    switch (true){
    case nilai >=80 :
        hasil = 'selamat anda mendapat A'
        break
    case nilai >=60 :
        hasil ='selamat anda mendapat B'
        break
    case nilai >=40 :
        hasil ='selamat anda mendapat C'
        break
    case nilai >=20 :
        hasil ='selamat anda mendapat D'
        break
    case nilai <20 :
        hasil ='selamat anda mendapat E'
        break    
    default:
        hasil ='anda salah input'

}
return hasil 
}

document.write(nilaiPeserta(567))





var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(55.5)],
    ["Andika", 70.1, nilaiPeserta(70.1)],
    ["Alif", 19, nilaiPeserta(19)],
    ["Vista", 102, nilaiPeserta(102)]
]



for (var i = 0, l1 = dataSiswa.length; i < l1; i++) {
    for (var j = 0, l2 = dataSiswa[i].length; j < l2; j++) {
        if(j==0){
            document.write('Nama : ' + dataSiswa[i][j], '<br>')
        }
        if(j==1){
            document.write('Nilai angka : ' + dataSiswa[i][j], '<br>')
        }
        if(j==2){
            document.write('Nilai huruf : ' + dataSiswa[i][j], '<br>')
        }
    }
}