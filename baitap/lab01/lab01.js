console.log("Lap 01");

const fullName = "Nguyen Tuấn Dũng";

const birthYear = 2004;
const currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log("%c Thông tin cá nhân:", "color: red; font-weight: bold; font-size: 16px;");
console.log("%c Cách 1: In 3 dòng thông tin", "color: blue; font-weight: bold; ");
console.log("Họ và tên: " + fullName);
console.log("Năm sinh: " + age);
console.log("Sinh viên: " + (age < 22));

console.log("%c Cách 1: Dùng dấu backtick ``", "color: blue; font-weight: bold;");
console.log(`Họ và tên: ${fullName}
Năm sinh: ${age}
Sinh viên: ${age < 22}`);