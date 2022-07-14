const data = require("./data");
const transformStudent =(students) => {
    const {english, social, science} = students.marks;
   return `${students.id}, ${students.name}, ${english}`

}

const logResult = (result) => {console.log(result)}
const main=() => {
    data.map(transformStudent).map(logResult);
    
};

main()