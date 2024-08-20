export default function getStudentIdSum(students) {
  const id = students.map((student) => student.id);
  const sumId = id.reduce((cur, next) => cur + next, 0);
  return sumId;
}
