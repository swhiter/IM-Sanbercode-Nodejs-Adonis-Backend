var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 
function dataHandling(input){
    var parsingdata = "";
    for(i=0;i<4;i++){
        for(j=0;j<5;j++){
            switch (j) {
                case 0: {
                    parsingdata += "Nomor ID: " + input[i][j]+ "\n";
                    break;
                }
                case 1: {
                    parsingdata += "Nama Lengkap: " + input[i][j]+ "\n";
                    break;
                }
                case 2: {
                    parsingdata += "TTL: " + input[i][j] + " "+ input[i][j+1]+ "\n";
                    j++
                    break;
                }
                case 4: {
                    parsingdata += "Hobi: " + input[i][j]+ "\n\n\n";
                    break;
                }
            }
        }
    }
    return parsingdata;
}
console.log(dataHandling(input));


// Tugas no 5
function balikKata(word) {
    var currentString = word;
    var newString = '';
    for (let i = word.length - 1; i >= 0; i--) {
        newString = newString + currentString[i];
    }
    return newString;
}
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 