export default function getsStudentsByLocation(studentsList, city) {
    return studentsList.filter(loc => loc.location === city);
}
