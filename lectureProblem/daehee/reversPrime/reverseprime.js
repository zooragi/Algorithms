let obj = {}
let reverse = function(number){
    if (number >= 100000) throw new Error("Invalid Number");
    return Number(number.toString().split("").reverse().join(""));    
}
obj.isPrime = function(){
    let inputNumArr = Array.prototype.slice.apply(arguments);
    let primeNum = inputNumArr.map( x => {
        let reversNum = reverse(x);
        let reversNumArr = new Array(reversNum);
        let isPrimeNum = reversNumArr.fill(1).map((x,y) => x*(y+1));
        let divisor = isPrimeNum.filter( currentNum => (reversNum%currentNum) === 0);
        if(divisor.length === 2) return x;
    })
    return primeNum.filter(v => !!v).join(" ")
}
module.exports = obj;