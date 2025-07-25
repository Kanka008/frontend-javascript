export interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string
}
export interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string
}

export class Director implements DirectorInterface{

    workFromHome(): string {
        return `Working from Home.`
    }
    getCoffeeBreak(): string {
        return `Getting a coffee break.`
    }
    workDirectorTasks(): string {
        return `Getting to Director Tasks.`
    }
}

export class Teacher implements TeacherInterface{
    workFromHome(): string {
        return `Cannot work from Home.`
    }
    getCoffeeBreak(): string {
        return `Cannot have a coffee break.`
    }
    workTeacherTasks(): string {
        return `Getting to work.`
    }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

export function isDirector(employee:DirectorInterface|TeacherInterface):employee is DirectorInterface{
        return (employee as DirectorInterface).workDirectorTasks !== undefined;
}
export function executeWork(employee: Director | Teacher): string{
    if (employee instanceof Director){
        return employee.workDirectorTasks();

    }else{
        return employee.workTeacherTasks()
    }
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string{
    if(todayClass === 'Math'){
        return `Teaching Math`;
    } else{
        return `Teaching History`;
    }
}