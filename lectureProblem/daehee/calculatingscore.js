let obj = {};

obj.calculatingScore = function(numberOfProblem){
    if(numberOfProblem < 0 || numberOfProblem > 100) throw new Error("Invalid Number");
    let problem = new Array(numberOfProblem);
    let problemAnswer = problem.fill().map( x => x = Math.floor(Math.random()*2))
    console.log(problemAnswer);
    let curScore = 0 ;
    let totalScore = 0;
    let continueNum = false;
    problemAnswer.forEach(element => {
        if(element === 1){
            if(continueNum){
                totalScore += ++curScore;
                return;
            }
            totalScore += ++curScore;
            continueNum = true;
        }else {
            curScore = 0;
            continueNum = false;
        }

    })
}

module.exports = obj;