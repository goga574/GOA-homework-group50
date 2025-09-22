const apiKey = "a5f107d2"

async function getApi() {
    
    
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${"jumanji"}`)

    let data = await response.json();


    console.log(data[0].show);

    
   
} 


getApi()