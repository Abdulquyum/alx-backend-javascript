export default function updateStudentGradeByCity(studentsList, city, newGrades) {
    return studentsList
    .filter(student => student.location === city)
    .map(student => {
        const gradeobj = newGrades.find(grade => grade.studentId === student.id);
        return {
            ...student,
            grade: gradeobj ? gradeobj.grade : "N/A"
        };
    });
}
