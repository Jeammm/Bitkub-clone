import coinData from "../../assets/data/coindata"

let coinDataWithFav = []
const name = Object.keys(coinData)
for (let i = 0; i<name.length; i++) {
    // coinDataWithFav[name[i]] = {...coinData[name[i]], isFavorite: false}
    const priceObject = { [name[i]] : {...coinData[name[i]], isFavorite: false} }
    coinDataWithFav.push(priceObject)
}


coinDataWithFav.sort( (a,b) => {
    const [key1, value1] = Object.entries(a)
    const [key2, value2] = Object.entries(b)
    return key1[1].id - key2[1].id
})

export default coinDataWithFav