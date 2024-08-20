export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const ids = array.map(students => students.id);
    return ids;
  }
  return []
}
