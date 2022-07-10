const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=07e120a909b24e61bf4bd2bd00f0bd2b&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'
    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to get weather information!', undefined)
        } else if (body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            const current = body.current
            callback(undefined, `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast

