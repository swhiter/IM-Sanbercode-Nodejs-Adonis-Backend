function kelompokAngka(arr) {
    let genap = []
    let ganjil = []
    let tiga = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            tiga.push(arr[i])
        } else if (arr[i] % 2 == 0) {
            genap.push(arr[i])
        } else {
            ganjil.push(arr[i])
        }
    }
    let kelompok = [ganjil, genap, tiga]
    //Code disini
    return kelompok
}

//Test Case

console.log(kelompokAngka([1, 2, 3, 4, 5, 6, 7]))

//Output:[[1,5,7],[2,4],[3,6]]

console.log(kelompokAngka([13, 27, 11, 15]))

//Output:[[13,11],[],[27,15]]

console.log(kelompokAngka([]))

//output:[[],[],[]]



function hitungVokal(str) {
    let number = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "A") {
            number++
        } else if (str[i] == "i" || str[i] == "I") {
            number++
        } else if (str[i] == "u" || str[i] == "U") {
            number++
        } else if (str[i] == "e" || str[i] == "E") {
            number++
        } else if (str[i] == "o" || str[i] == "O") {
            number++
        }
    }
    //code disini
    return number
}

// Test Cases

console.log(hitungVokal("Adonis"))// Output:3

console.log(hitungVokal("Error"))//Output:2

console.log(hitungVokal("Eureka"))//Output:4

console.log(hitungVokal("Rsch")) // Output: 0


function tandaiA(str) {
    let string = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "A") {
            string += "x"
        } else {
            string += str[i]
        }
    }
    //code disini
    return string
    // code di sini

}

// Tes Cases
console.log(tandaiA("abrakadabra")) // xbrxkxdxbrx
console.log(tandaiA("garuda")) // gxrudx
console.log(tandaiA("kucing")) // kucing



function graduate(arr) {
    console.log(arr.length)
    let hasil = []
    for (let i = 0; i < arr.length; i++) {
        if (hasil.hasOwnProperty(arr[i].class)) {
            let kelas = arr[i].class
            isikelas = []
            isikelas.push(hasil[kelas])
            let tempData = {
                name: arr[i].name,
                score: arr[i].score,
                grade: arr[i].score < 60 ? "participated" : arr[i].score < 86 ? "completed" : "mastered",
            }
            isikelas.push(tempData)
            hasil[kelas] = isikelas
        }else{
            let kelas = arr[i].class
            hasil = {
                ...hasil,
                [kelas]: {
                    name: arr[i].name,
                    score: arr[i].score,
                    grade: arr[i].score < 60 ? "participated" : arr[i].score < 86 ? "completed" : "mastered"
                }
            }
        }

    }
    return hasil
    // code di sini

}

// TEST CASE
// Contoh Input

var arr = [

    { name: "Ahmad", score: 80, class: "Laravel" },

    { name: "Regi", score: 86, class: "Vuejs" },

    { name: "Robert", score: 59, class: "Laravel"},
    
    { name: "Bondra", score: 81, class: "Reactjs" }

]


console.log(graduate(arr))

//Output

// {

//     Laravel: [{ name: "Ahmad", score: 80, grade: "completed" }, { name: "Robert", score: 59, grade: "participated" }],

//         Vuejs: [

//             { name: "Regi", score: 86, grade: "mastered" }

//         ],

//             Reactjs: [{ name: "Bondra", score: 81, grade: "completed" }]

// }

