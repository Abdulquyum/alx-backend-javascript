const fs = require('fs');  // Correct import to use 'fs' module

function countStudents(path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(path, 'utf8');

        // Split data into lines
        const lines = data.trim().split('\n');

        // Remove the header (assuming the first line is a header)
        const students = lines.slice(1);

        // Count total number of students
        console.log(`Number of students: ${students.length}`);

        // Create a map to group students by their field (assuming field is the last column)
        const fields = {};
        students.forEach((student) => {
            const details = student.split(',');
            const firstname = details[0];  // Assuming first name is the first column
            const field = details[details.length - 1];  // Assuming field is the last column

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        // Print the number of students in each field and their first names
        for (const field in fields) {
            const studentList = fields[field];
            console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
