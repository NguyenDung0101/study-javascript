console.log("Video 21");

const name = "Dung";
const age = 21;
console.log(name, age);

// Không nên: cộng chuỗi dễ sai
console.log("Name: " + name + ", Age: " + age);

console.log("Name:", name, ", Age:", age); // Này tự động thêm dấu cách

console.log(`Name: ${name}, Age: ${age}`) // Cách này hay dùng nhất 
// vì dễ đọc, dễ viết, ít lỗi


/*
Cách comment nhiều dòng
*/

console.log("%cCẢNH BÁO: Takimesu", "color: red; font-size: 20px; background-color: yellow; padding: 5px");

console.error("Error info");
console.warn("Warning info");