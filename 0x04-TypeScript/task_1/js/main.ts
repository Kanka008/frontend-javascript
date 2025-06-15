 interface Teacher{
       readonly firstName: string;
       readonly lastName: string;
        fullTimeEmployee: boolean;
        yearsOfExperience?: number;
        location: string
        [key:string]:any;
}

const teacher1: Teacher ={
    firstName: "Marion",
    lastName: "Mituri",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Kiambogo",
    contract: 5,
}
console.log(teacher1)
