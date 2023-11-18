import fs from 'fs';
export function createStudent ({name, age,gentel}) {
    const students = JSON.parse(fs.readFileSync("students.json"));
    const student = {
        name:  name,
        age: age,
        gentel: gentel
    }
    const result = [...students,{...student}];
    fs.writeFileSync("students.json",JSON.stringify(result));
    return student;
}
