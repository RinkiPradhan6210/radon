let axios = require("axios")
let getTemp = async function (req, res) {
    try {

        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=faba5edb88a7f6ae96afc258d1c6937d`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getShortedCity = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let shortedCities = []
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
        let result = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=faba5edb88a7f6ae96afc258d1c6937d`)
            console.log(result.data.main.temp)
            obj.temp = result.data.main.temp
            shortedCities.push(obj)
        }
        let sorted = shortedCities.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })
     }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getTemp = getTemp
module.exports.getShortedCity = getShortedCity
