let promise=fetch("https://goweather.herokuapp.com/weather/Kathmandu")
promise.then((value)=>{
    console.log(value.headers)
    console.log(value.status)
    console.log(value.ok)
    return value.json()
}).then((response)=>{
    console.log(response)
})