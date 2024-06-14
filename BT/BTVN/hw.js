// function validateBraces(str) {
//   var stack = [];
//   for (var i = 0;i < str.length;i++) {
//     if (isOpeningBrace(str[i])) {
//       stack.push(str[i]);//from   w ww .ja  va2  s.  c o m
//     } else if (closingBracesMatch(str[i], stack)) {
//       stack.pop();
//     }
//   }
//   return stack.length === 0;
// }

// function closingBracesMatch(closing, stack) {
//   var opening = stack[stack.length - 1];
//   return (opening === "(" && closing === ")") ||
//     (opening === "[" && closing === "]") ||
//     (opening === "{" && closing === "}");
// }

// function isOpeningBrace(character) {
//   return character === '(' || character === '{' || character === '[';
// }

// console.log(validateBraces("{ [ ] ( ) }")) //should return true
// console.log(validateBraces("{ [ ( ] ) }")) //should return false
// console.log(validateBraces("{ [ }")) //should return false

function countWordSizes(sentence) {
  // Chuyển câu về chữ thường để không phân biệt chữ hoa chữ thường
  sentence = sentence.toLowerCase();
  
  // Tách câu thành mảng các từ
  const words = sentence.split(/\s+/);
  
  // Đối tượng để lưu trữ số lần xuất hiện của từng từ
  const wordCounts = {};
  
  // Lặp qua từng từ
  for (let word of words) {
    // Xóa bỏ dấu câu và khoảng trắng không cần thiết
    word = word.replace(/[^\w\s]/g, '');
    
    // Nếu từ không rỗng
    if (word !== '') {
      // Nếu từ đã tồn tại trong đối tượng wordCounts, tăng số lần xuất hiện lên 1
      if (wordCounts[word]) {
        wordCounts[word]++;
      } else {
        // Nếu từ chưa tồn tại, thêm vào đối tượng với số lần xuất hiện là 1
        wordCounts[word] = 1;
      }
    }
  }
  
  return wordCounts;
}

// Test
const sentence = "Hello world hello hello earth earth hello";
const result = countWordSizes(sentence);
console.log(result); // Object { hello: 3, world: 1, earth: 2 }
