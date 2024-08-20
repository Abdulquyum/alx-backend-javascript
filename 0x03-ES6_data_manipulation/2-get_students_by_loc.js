export default function getStudentsByLocation(students, city) {
  const cityStudents = students.filter((students) => students.location === city);
  return cityStudents;
}
