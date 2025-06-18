namespace Subjects{
    export interface Teacher{
        experienceTeachingReact?: number;
    }
    export class React{
        teacher:Teacher;
        constructor(teacher:Teacher){
            this.teacher = teacher;
        }
        getRequirements(): string{
            return`Here is the list of requirements for React`
        }
        getAvailableTeacher(): string{
            if(this.teacher.experienceTeachingReact &&this.teacher.experienceTeachingReact > 0 ){
                return `AvailableTeacher:${this.teacher.firstName}`
            }else{
                return`No available teacher`
            }
        }
    }
}