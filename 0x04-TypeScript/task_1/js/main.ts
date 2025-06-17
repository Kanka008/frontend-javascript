export interface Teacher{
       readonly firstName: string;
       readonly lastName: string;
        fullTimeEmployee: boolean;
        yearsOfExperience?: number;
        location: string
        [key:string]:any;
}

export const teacher1: Teacher ={
    firstName: "Marion",
    lastName: "Mituri",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Kiambogo",
    contract: 5,
}
console.log(teacher1)

export interface Director extends Teacher{
    numberOfReports: number;
}
export const director1: Director = {
    firstName: "Erim",
    lastName: "Kazungu",
    fullTimeEmployee: true,
    yearsOfExperience: 25,
    location: "rwanda",
    contract: 65,
    numberOfReports: 10
}
console.log(director1);

export interface printTeacher{
    firstName: string;
    lastName: string
}
export interface printTeacherFunction{
    (firstName: string, lastName: string):string;
}

const printTeacher :printTeacherFunction = (firstName, lastName) => {
            return `${firstName.charAt(0)}. ${lastName}`;
}

