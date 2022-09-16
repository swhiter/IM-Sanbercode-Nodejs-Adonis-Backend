function arrayToObject(arr) {
    var now = new Date()
    var thisYear = now.getFullYear();
    if (arr.length > 0) {
        var objek1 = {
            firstName: arr[0][0],
            lastName: arr[0][1],
            gender: arr[0][2],
            age: arr[0][3] != null && arr[0][3] < thisYear ? thisYear - arr[0][3] : "Invalid Birth Year"
        }

        var objek2 = {
            firstName: arr[1][0],
            lastName: arr[1][1],
            gender: arr[1][2],
            age: arr[1][3] != null && arr[1][3] < thisYear ? thisYear - arr[1][3] : "Invalid Birth Year"
        }
        console.log("1. " + objek1.firstName + " " + objek1.lastName + ": " + JSON.stringify(objek1));
        console.log("2. " + objek2.firstName + " " + objek2.lastName + ": " + JSON.stringify(objek2));
    }
}
var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
arrayToObject(people)
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

var people2 = [["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023]]
arrayToObject(people2)
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

// Error case 
arrayToObject([]) // ""

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var output = [];
    if (arrPenumpang.length > 0) {
        for (var i = 0; i < arrPenumpang.length; i++) {
            var ruteawal = rute.indexOf(arrPenumpang[i][1]);
            var ruteakhir = rute.indexOf(arrPenumpang[i][2]);
            var harga = (ruteakhir - ruteawal) * 2000;
            var objekPenumpang = {
                penumpang: arrPenumpang[i][0],
                naikDari: arrPenumpang[i][1],
                tujuan: arrPenumpang[i][2],
                bayar: harga
            }
            output.push(objekPenumpang);
        }
    }
    //your code here
    return output;
}
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

function nilaiTertinggi(siswa) {
    let tertinggi = []
    for (let i = 0; i < siswa.length; i++) {
        let data;
        if (tertinggi.hasOwnProperty(siswa[i].class)) {
            let kelas = siswa[i].class
            if(tertinggi[kelas].score < siswa[i].score){
                tertinggi[kelas].name = siswa[i].name
                tertinggi[kelas].score = siswa[i].score
            }
        }else{
            let kelas = siswa[i].class
            tertinggi = {
                ...tertinggi,
                [kelas]: {
                    name: siswa[i].name,
                    score: siswa[i].score
                }
            }
        }

    }
    return tertinggi
}

// TEST CASE
console.log(nilaiTertinggi([
    {
        name: 'Asep',
        score: 90,
        class: 'adonis'
    },
    {
        name: 'Ahmad',
        score: 85,
        class: 'vuejs'
    },
    {
        name: 'Regi',
        score: 74,
        class: 'adonis'
    },
    {
        name: 'Afrida',
        score: 78,
        class: 'reactjs'
    }
]));

// OUTPUT:

// {
//   adonis: { name: 'Asep', score: 90 },
//   vuejs: { name: 'Ahmad', score: 85 },
//   reactjs: { name: 'Afrida', score: 78}
// }


console.log(nilaiTertinggi([
    {
        name: 'Bondra',
        score: 100,
        class: 'adonis'
    },
    {
        name: 'Putri',
        score: 76,
        class: 'laravel'
    },
    {
        name: 'Iqbal',
        score: 92,
        class: 'adonis'
    },
    {
        name: 'Tyar',
        score: 71,
        class: 'laravel'
    },
    {
        name: 'Hilmy',
        score: 80,
        class: 'vuejs'
    }
]));

  // {
  //   adonis: { name: 'Bondra', score: 100 },
  //   laravel: { name: 'Putri', score: 76 },
  //   vuejs: { name: 'Hilmy', score: 80 }
  // }