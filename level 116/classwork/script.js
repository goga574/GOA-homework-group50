// 1) შევქმანთ new Map ზღვის ლომების ტიპი
//   1. სახელი, გვრი, საცხოვრებელი 
//   2. დავამატოთ ასაკი ჩენი ზღვის ლომის
//   3. for of ით გადავუაროთ zgvisLomebi.keys() და მათი value ები გამომიტანეთ კონსოლში



let map = new Map( [["name" , "davit"] , ["surname" , "geladze"] , ["adress" , "ghvinis qvevri"]])

map.set("age" , "126")
for(let k of map.keys()){
    console.log(k)
}
console.log(map)
