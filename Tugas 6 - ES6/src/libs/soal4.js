export const filter = (params) =>{
    const data = [
        { name: "Ahmad", kelas: "adonis"},
        { name: "Regi", kelas: "laravel"},
        { name: "Bondra", kelas: "adonis"},
        { name: "Iqbal", kelas: "vuejs" },
        { name: "Putri", kelas: "Laravel" }
    ]

    let result = data.filter((element) => {
        if (element.kelas == params){
            return element
        }
    })

    return result
}