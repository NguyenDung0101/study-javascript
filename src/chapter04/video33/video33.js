console.log("Video 33");

let globalVar = "I am global";

function show() {
  console.log(globalVar);
}

show();

console.log("Phạm vi hàm");

function sayHi() {
  let name1 = "NguyenTuanDung!";
  console.log(name1);

  if (true) {
    let x = 30;
    const y = 40;
    console.log(x, y);
  }

  console.log(x); // Lỗi: x không được định nghĩa
}

sayHi();

console.log(name1);

console.log("Phạm vi khối");
