import createEmployeesObject from './11-createEmployeeObject.js';
import createReportObject from './12-createReportObject.js';

const employess = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
}

const report = createReportObject(employess);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
