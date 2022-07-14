const data = require("./data");

const calculateTotal = (student) => {
    const marks = Object.values(student.marks)
    student.total = marks.reduce((mark, value) => value + mark , 0)
    return student


}
const transformStudent =(student) => {
    const {id, name, total, marks: { english, social, science}} = student;
   return ` ${id}, ${name}, ${english} ${social} ${science}, ${total}`

}

const logResult = (result) => console.log(result)
const main=() => {
    data
    .map(calculateTotal)
    .map(transformStudent)
    .map(logResult)
    
}

main()