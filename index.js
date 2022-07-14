const data = require("./data");

const main=() => {
    data.map((students) => {
        const marks = students.marks
        console.log(students.id, students.name, students.marks)
    })
}

main()