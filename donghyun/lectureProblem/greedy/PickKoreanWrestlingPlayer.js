const criterionCheck = (input) => {
    const inputData = input.split("\n");
    const volunteerLen = Number(inputData.shift());
    const volunteerList = inputData.map((v) => v.split(" ").map(Number));
    const pass = volunteerList.filter((v,i) => {
        if(volunteerList.filter((members) => v[0] < members[0] && v[1] < members[1]).length === 0) return 1;
    })
    return pass.length;
}

module.exports = criterionCheck