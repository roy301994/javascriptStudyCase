var grade=parseInt(prompt('contoh2 nilai mahasiswa','0-100'))
switch (true){
    case grade >=90 :
        document.write('selamat anda mendapat A')
        break
    case grade >=80 :
        document.write('selamat anda mendapat B')
        break
    case grade >=70 :
        document.write('selamat anda mendapat C')
        break
    case grade >=60 :
        document.write('selamat anda mendapat D')
        break
    default:
        document.write('anda useless')

}