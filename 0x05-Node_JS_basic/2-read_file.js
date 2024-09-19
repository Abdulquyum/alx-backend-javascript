const fs = require('fs')

function countStudents(path) {
    try {
        data = fs.readFileSync(path, 'utf8');
        lines = data.trim().split('\n');
        students = lines.slice(1);

        console.log(`Number of students: ${students.length}`);

        const fields = {}

        students.forEach((students) => {
            const details = students.split(',');
            const firstName = details[0];
            const field = details[details.length - 1];

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstName);
        });

        for (const field in fields) {
            const studentList = fields[field];
            console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        }
    }
    catch (err) {
        throw new Error('Cannot load the database')
    }
}

module.exports = countStudents;