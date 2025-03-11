// 1) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა სია შემდეგ კი დაბეჭდეთ ამ სიის ჯამი
function sumArray(numbers){
    let sum=0
    for(let i of numbers){
        sum+=i
    }
    return sum
}

console.log(sumArray([1,3,2,4]))
