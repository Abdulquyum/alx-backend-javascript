interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working From home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a coffee break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string) {
    if (typeof(salary) === 'number' && salary < 500)
        return Teacher;

    return Director;
}

function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
    return employee instanceof isDirector;
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    } else {
        employee.workTeacherTasks();
    }
}

function teachClass(todayClass: string): string {
    const Subjects = `Teaching ${todayClass}`;

    return Subjects;
}
