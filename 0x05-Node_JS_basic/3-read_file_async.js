const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const students = lines.slice(1);

      console.log(`Number of students: ${students.length}`);

      const fields = {};

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
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const studentList = fields[field];

          console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
