const getDataFromBackand = () => {
    let http = new XMLHttpRequest()

    http.onreadystatechange = function () {
        if(this.readyState == 4){
            if(this.status == 200){
                let response = JSON.parse(this.responseText)

                response.map((item) =>{
                    document.body.innerHTML += item.title
                })
            }
            console.log(this.readyState)
        }
    }

    http.open("GET" , "https://jsonplaceholder.typicode.com/todos")

    http.send()

}

getDataFromBackand()