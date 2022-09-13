// Soal 1
var nama = "swhiter";
var peran = "guard";

if (nama == "") {
    console.log("Nama harus diisi!");
} else if (peran == "") {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} else {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    if (peran == "penyihir") {
        console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
    } else if (peran == "guard") {
        console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf");
    } else if (peran == "warewolf") {
        console.log("Halo Werewolf  " + nama + ", Kamu akan memakan mangsa setiap malam!");
    } else {
        console.log("Hanya isi peran penyihir, guard, atau warewolf!");
    }
}

//Soal 2
var tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
    case 1: {
        console.log(tanggal + ' Januari ' + tahun);
        break;
    }
    case 2: {
        console.log(tanggal + ' Februari ' + tahun);
        break;
    }
    case 3: {
        console.log(tanggal + ' Maret ' + tahun);
        break;
    }
    case 4: {
        console.log(tanggal + ' April ' + tahun);
        break;
    }
    case 5: {
        console.log(tanggal + ' Mei ' + tahun);
        break;
    }
    case 6: {
        console.log(tanggal + ' Juni ' + tahun);
        break;
    }
    case 7: {
        console.log(tanggal + ' Juli ' + tahun);
        break;
    }
    case 8: {
        console.log(tanggal + ' Agustus ' + tahun);
        break;
    }
    case 9: {
        console.log(tanggal + ' September ' + tahun);
        break;
    }
    case 10: {
        console.log(tanggal + ' Oktober ' + tahun);
        break;
    }
    case 11: {
        console.log(tanggal + ' November ' + tahun);
        break;
    }
    case 12: {
        console.log(tanggal + ' Desember ' + tahun);
        break;
    }
    default: {
        console.log('Bulan diluar jangkauan!');
    }
}