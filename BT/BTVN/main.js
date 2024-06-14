// const message = 'Hello world' // Try edit me

// // Update header text
// document.querySelector('#header').innerHTML = message

// // Log to console
// // console.log(message)

// // let arr=[1,2,3,4,5]
// // arr.splice(2,1)
// // console.log(arr)

// function addNumberToArray(arr, number){
//   for(var i=0;i<arr.length;i++){
//     arr[i]=arr[i]+number;
//   }
//   return arr;
// }

// console.log(addNumberToArray([1,2,3], 5))
// console.log(addNumberToArray([1,2,3], 1))

// let arr = [2,3,'1',4]; 
// arr.sort() // => thứ tự sắp xếp là chuỗi -> số -> mảng -> object ->func, trong đó những itém convert đc sang số sẽ chuyển sang số để tiến hành sort, còn những itém không convert đc sẽ cho ra phía sau, còn mảng thì chỉ lấy giá trị đầu trong mảng đem đi convert 
// // console.log(arr)

// function countUpperLower(string) {
//   let upperCount = 0;
//   let lowerCount = 0;

//   for (let i = 0; i < string.length; i++) {
//     let char = string.charAt(i);
//     if (char >= 'A' && char <= 'Z') {
//       upperCount++;
//     } else if (char >= 'a' && char <= 'z') {
//       lowerCount++;
//     }
//   }

//   return { upperCount, lowerCount };
// }

// // Test hàm
// let result = countUpperLower("Hello World");
// console.log("Số lượng ký tự in hoa:", result.upperCount); // Số lượng ký tự in hoa: 2
// console.log("Số lượng ký tự in thường:", result.lowerCount); // Số lượng ký tự in thường: 8

// function countUpperLower(string) {
//   let charCounts = [];
  
//   // Đếm số lượng ký tự in hoa và in thường
//   let upperCount = 0;
//   let lowerCount = 0;

//   for (let i = 0; i < string.length; i++) {
//     let char = string.charAt(i);
//     if (char >= 'A' && char <= 'Z') {
//       upperCount++;
//     } else if (char >= 'a' && char <= 'z') {
//       lowerCount++;
//     }
//   }

//   // Tạo đối tượng chứa số lượng ký tự in hoa và in thường
//   charCounts.push({ type: 'Upper', count: upperCount });
//   charCounts.push({ type: 'Lower', count: lowerCount });

//   // Sắp xếp mảng theo count tăng dần
//   charCounts.sort((a, b) => a.count - b.count);

//   return charCounts;
// }

// // Test hàm
// let result = countUpperLower("Hello World");
// console.log(result);

// function countUpperLowerSort(string) {
//   let sortedChars = string.split('').sort(); // Chuyển chuỗi thành mảng ký tự và sắp xếp
//   let counts = sortedChars.reduce(function(acc, char) {
//     if (char >= 'A' && char <= 'Z') {
//       acc.upperCount++;
//     } else if (char >= 'a' && char <= 'z') {
//       acc.lowerCount++;
//     }
//     return acc;
//   }, { upperCount: 0, lowerCount: 0 });

//   return counts;
// }

// // Test hàm
// let result = countUpperLowerSort("Giahan05092003@gmail.com");
// console.log("Số lượng ký tự in hoa:", result.upperCount); // Số lượng ký tự in hoa: 1
// console.log("Số lượng ký tự in thường:", result.lowerCount); // Số lượng ký tự in thường: 9

//---------BT Chương 5-------------

// function Name(name){
//   alert(`Xin chào ${name}`);
// }

// Name('Gia Hân')


// function GetArea(h, w){
//     if(Number.isFinite(h) && Number.isFinite(w)){
//         return h*w;
//     }
//     
// }

// console.log(GetArea(20,5));

// function FindMax(a, b, c){
//     if(Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(c)){
//             var max = a;
//         if(b> a)
//         {
//             max=b;
//         }else if(c>a){
//             max=c;
//         }
//         return max;
//     }
//     else{
//         alert('phải là số');
//     }
    
// }

// console.log(FindMax(-5,-25,-9));

// function UCL(a, b) {
//     if (Number.isFinite(a) && Number.isFinite(b)) {
//         while (a !== b) {
//             if (a > b) {
//                 a = a - b;
//             } else {
//                 b = b - a;  // Thay đổi ở đây
//             }
//         }
//         return a;
//     }
// }

// console.log(UCL(25,50));

// function FindPrime(n) {
//     if (Number.isFinite(n) && n > 1) {
//         var arr = [];
//         for (var i = 2; i <= n; i++) {
//             var isPrime = true;
//             for (var j = 2; j <= Math.sqrt(i); j++) {
//                 if (i % j === 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//             if (isPrime) {
//                 arr.push(i);
//             }
//         }
//         return arr;
//     }
    
// }

// console.log(FindPrime(10))

// function IsNegative(arr){
//     var count = 0;
//     for (var i = 0; i <arr.length; i++){
//         if(arr[i] <0)
//         {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(IsNegative([1,2,3,5,-9]))


// function MaxArr(arr){
//     var index = 0;
//     var arrLength = arr.length;
//     var max = arr[0];
//     for (var i = 0; i <arrLength; i++){
//         if(arr[i] >= max){
//             max = arr[i];
//             index = i;
//         }
//     }
//    console.log(`Giá trị lớn nhất là ${max} có vị trí là ${index} `)
// }

// MaxArr([1,2,3,5,-9])

// function Factorial(a)
// {
//     if(a>0){
//         return a*Factorial(a-1);
//     }
//     return 1;
// }

// console.log(Factorial(6))

// function Sum(n){
//     var sum =0;
//     for(var i=0;i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }

// console.log(Sum(5))

// function euclideanDistance(list1, list2) {
//     if (list1.length !== list2.length) {
//         throw new Error('Danh sách phải có cùng độ dài.');
//     }

//     let sumOfSquares = 0;
//     for (let i = 0; i < list1.length; i++) {
//         const diff = list1[i] - list2[i];
//         sumOfSquares += diff * diff;
//     }

//     const distance = Math.sqrt(sumOfSquares);
//     return distance;
// }

// // Test
// const list1 = [1, 2, 3, 4];
// const list2 = [4, 3, 2, 1];
// const distance = euclideanDistance(list1, list2);
// console.log('Khoảng cách Euclidean:', distance);

// function findMinMaxSubject(subjects) {
//     if (!Array.isArray(subjects) || subjects.length === 0) {
//         return "Danh sách môn không hợp lệ.";
//     }

//     let minScore = Infinity;
//     let maxScore = -Infinity;

//     let minSubject = '';
//     let maxSubject = '';

//     for (const [subject, score] of subjects) {
//         if (score < minScore) {
//             minScore = score;
//             minSubject = subject;
//         }
//         if (score > maxScore) {
//             maxScore = score;
//             maxSubject = subject;
//         }
//     }

//     return {
//         minSubject: minSubject,
//         minScore: minScore,
//         maxSubject: maxSubject,
//         maxScore: maxScore
//     };
// }

// // Danh sách môn học
// const subjects = [
//     ['Toan', 9],
//     ['Ly', 10],
//     ['Hoa', 8],
//     ['Van', 9.5]
// ];

// // Gọi hàm và in kết quả
// const result = findMinMaxSubject(subjects);
// console.log("Môn có điểm thấp nhất là:", result.minSubject, "với điểm:", result.minScore);
// console.log("Môn có điểm cao nhất là:", result.maxSubject, "với điểm:", result.maxScore);

// function CheckDown(arr){
//     var flag = true;
//     var arrLength = arr.length;
//     for (var i = 0; i <arrLength-1; i++){
//         if(arr[i+1]>arr[i])
//         {
//             flag = false;
//             break;
//         }
//     }
//     return flag;
// }

// console.log(CheckDown([5,4,3,-9]))

// function CheckEvenFirst(arr){
//     var arrLength = arr.length;
//     for (var i = 0; i <arrLength; i++){
//         if(arr[i]%2==0){
//             return arr[i];
          
//         }
//     }
//     return false;
// }
// console.log(CheckEvenFirst([5,7,3,-10]))

function longest_unique_substring(s) {
    let maxLength = 0;
    let start = 0;
    let maxLengthStart = 0;
    let seen = new Map();

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1;
        }

        seen.set(char, i);

        if (i - start + 1 > maxLength) {
            maxLength = i - start + 1;
            maxLengthStart = start;
        }
    }

    return s.substring(maxLengthStart, maxLengthStart + maxLength);
}

// Kiểm tra hàm với chuỗi đã cho
const s = "abcabcbb";
console.log("Chuỗi con không lặp lại dài nhất là:", longest_unique_substring(s));
