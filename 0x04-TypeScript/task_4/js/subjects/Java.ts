namespace Subjects{
    export interface Teacher{
        experienceTeachingJava?: number;
    }
    export class Java{
        teacher:Teacher;
        constructor(teacher:Teacher){
            this.teacher = teacher;
        }
        getRequirements(): string{
            return`Here is the list of requirements for React`
        }
        getAvailableTeacher(): string{
            if(this.teacher.experienceTeachingJava &&this.teacher.experienceTeachingJava > 0 ){
                return `AvailableTeacher:${this.teacher.firstName}`
            }else{
                return`No available teacher`
            }
        }
    }
}