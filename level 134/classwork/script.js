try{    
    let num = 11
    if(num === 10){
        console.log(num + 5)
    }else{
        throw new Error("i am error")
    }
}
catch(e){
    console.log(e)
}