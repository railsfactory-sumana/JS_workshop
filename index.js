const students = require("./data");
const data = require("./data");

// const calculateTotal = (student) => {
//     const marks = Object.values(student.marks)
//     const total = marks.reduce((mark, value) => value + mark , 0)
//     return {...student, total }
// }

const ProcessMarkSheet = (student) => 
    {
    const marks = Object.values(student.marks);
    const minPassMarks = 40
    const IsPass = Math.min(...marks) >= minPassMarks ? 'Pass' : 'Fail';
    
        return ({
            ...student,
            total: marks.reduce((mark, value) => value + mark, 0),
            IsPass
        });
    }

const transformStudent =(student) => {
    const {id, name, total,IsPass, marks: { english, social, science}} = student;
   return ` ${id}, ${name}, ${english} ${social} ${science}, ${total}, ${IsPass}`

}

const logResult = (result) => console.log(result)
const main=() => {
    data
    // .map(calculateTotal)
    .map(ProcessMarkSheet)
    .map(transformStudent)
    .map(logResult)
    
}

main()