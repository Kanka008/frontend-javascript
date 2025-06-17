"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentClass = exports.director1 = exports.teacher1 = void 0;
exports.teacher1 = {
    firstName: "Marion",
    lastName: "Mituri",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Kiambogo",
    contract: 5,
};
console.log(exports.teacher1);
exports.director1 = {
    firstName: "Erim",
    lastName: "Kazungu",
    fullTimeEmployee: true,
    yearsOfExperience: 25,
    location: "rwanda",
    contract: 65,
    numberOfReports: 10
};
console.log(exports.director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
var studentClass = /** @class */ (function () {
    function studentClass(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName;
    }
    studentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    studentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return studentClass;
}());
exports.studentClass = studentClass;
