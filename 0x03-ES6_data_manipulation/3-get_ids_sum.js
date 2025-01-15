export default function getStudentIdsSum(studentsList) {
    const result = studentsList.reduce((prev, next) => prev + next.id, 0);

    return result;
}
