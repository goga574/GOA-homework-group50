let timep = document.querySelector(".time")

let tempp = document.querySelector("celsius")



// =====================
let apiKey = "p8XxaDU0p2oO5zrTI6Ba5gqF9YuwK7y4"; 

let lat = 48.8566;
let lon = 2.3522;

let fields = "temperature,humidity,windSpeed,cloudCover,precipitation";

let url = `https://api.tomorrow.io/v4/weather/realtime?location=${lat},${lon}&fields=${fields}&apikey=${apiKey}`;

function getApi() {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((data) => {
                resolve(data.json())
            })

    })
}


function getData(response) {
    console.log(response.data.values.temperature)
   
}

getApi()
    .then(getData)
    .catch(()=>{
        console.log("error")
    })