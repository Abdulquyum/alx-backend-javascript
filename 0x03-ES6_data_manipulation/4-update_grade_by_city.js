export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  const gradedCityStudents = cityStudents.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });
  return gradedCityStudents;
}
