let obj = {}

obj.diceGame = function(numberOfPeople){
    let money = 0;
    let numberOfPeopleArr = new Array(numberOfPeople);
    let totalDiceNum = numberOfPeopleArr.fill().map( x => x = [parseInt(Math.random()*6 + 1),parseInt(Math.random()*6 + 1),parseInt(Math.random()*6 + 1)]);
    let totalMoney = totalDiceNum.map( randomDiceNum =>{
        let duplicateNum = new Set(randomDiceNum);
        // console.log(duplicateNum.size);
        switch(duplicateNum.size){
            case 1:
                money = 10000 + (randomDiceNum[0] * 1000);
                break;
            case 2:
                if(randomDiceNum[0] === randomDiceNum[1]) money = 1000 + randomDiceNum[0]*100;
                else money = 1000 + randomDiceNum[1]*100;
                break;
            case 3:
                money = Math.max.apply(null, randomDiceNum) * 100
                break;
        }
        return money;
    })
}
module.exports = obj;