console.log("video 27");

const score = 11;
console.log("Điểm của bạn là: " + score);

switch (true) {
  case (score >= 10):
    console.log("Điểm ảo vl, nên đầu từ HDPE là ngon luôn");
    break;
  case (score >= 8 && score <= 10):
    console.log("Giỏi");
    break;
  case (score >= 6 && score < 8):
    console.log("Khá");
    break;
  case (score <= 6 && score > 4):
    console.log("Trung bình");
    break;
  default:
    console.log("Yếu!");
  }