const criterionCheck = (input) => {
    const inputData = input.split("\n");
    const volunteerLen = Number(inputData.shift());
    const volunteerList = inputData.map((v) => v.split(" ")).sort().reverse();
    let max = 0
    return volunteerList.filter((v,i) => {
        if(v[1] > max){
            max = v[1];
            return 1;
        }
    }).length;
}
module.exports = criterionCheck