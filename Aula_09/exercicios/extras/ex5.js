var maior = 0;
let array = [12,48,469,45,1578,146];
for(var i = 0; i < array.length; i++) {
   if ( array[i] > maior ) {
      maior = array[i];
   }
}
console.log(maior);