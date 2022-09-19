export const score = (params) => {
    let arrTemp = params.toString().split(":").join().split(",")

    var result = {
        name : arrTemp[1],
        class : arrTemp[3],
        score : arrTemp[5]
    }

    return result
}