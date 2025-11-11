//  შექმენით სია სადაც იქნება user-ების სახელი და გვარი და ახალ სიაში დაამატეთ ამ იუსერების  ინიციალები სახელის და გვარის პირველი ასოები, მაგალითად: გიორგი ბიბილაშვილი -> გ.ბ 


let arr = ["giorgi giorgobiani","beqa gviniashvili","lasha sirbiladze"]

let empty = []

for(let i of arr){
    var parts = i.split(" ")

    empty.push(parts[0][0]+ "." + parts[0][0])
}
console.log(empty)