// )Splice მეთოდის გამოყენებით ჩაანაცვლეთ სიაში ყველა უარყოფითი რიცხვი 0 - ით
let arr = [1,-4,,6,-45,6,-24,67]
for( i = 0;i<arr.length;i++){
    if(arr[i]<0){
        arr.splice(i,1,0)
    }
}
console.log(arr)