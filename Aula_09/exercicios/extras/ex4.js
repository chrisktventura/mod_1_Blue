var maior = "";
let array = ["legal cara","só vai","tenta mas não guenta","cê ta doido","olokinho meu","xis tudo"];
for (let i = 0; i <array.length; i++){
    if(array[i].length > maior.length){
        maior = array[i];
}
     
}
  
console.log(maior)