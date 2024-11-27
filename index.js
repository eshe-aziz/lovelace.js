let a = 20;
console.log(a);


let b = null
console.log(b)


let c;
console.log(c);
c = 50;
console.log(c);


const studentData = [
    {"name": "Faith", "scores": [20, 30, 40]},
    {"name": "Kashuna", "scores": [50, 60, 40]}
];

function calculateScore(studentData) {
    const totalScores = {};
    for (const student of studentData) {
        const totalScore = student.scores.reduce((a, b) => a + b, 0);
        totalScores[student.name] = totalScore;
    }
    return totalScores;
}

console.log(calculateScore(studentData));