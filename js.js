// №273 
// let i = 1;

// function func(){
// 	console.log(i);
// 	i++;
	
// 	if (i <= 10){
// 		func(); // здесь функция вызывает сама себя
// 	}
// }
// func();
// №274
// let arr = [1, 2, 3, 4, 5];
// function func(arr) {
// 	console.log(arr.shift());
	
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// }
// func(arr)
// №275 1
// let arr = [1, 2, 3, 4, 5];

// function func(arr, index = 0) {
//     if (index === arr.length) {
//         return 0;
//     } else {
//         return arr[index] * arr[index] + func(arr, index + 1);
//     }
// }

// console.log(func(arr)); 
// №276 1
// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// function printPrimitiveElements(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             printPrimitiveElements(obj[key]);
//         } else {
//             console.log(obj[key]);
//         }
//     }
// }

// printPrimitiveElements(obj);
// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// function func(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             func(obj[key]);
//         } else {
//             console.log(obj[key]);
//         }
//     }
// }

// func(obj);
// №276 2
// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

// function func(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(func(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(func(arr)); 
// №277 1
// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// function func(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             sum += func(obj[key]);
//         } else {
//             sum += obj[key];
//         }
//     }
//     return sum;
// }

// console.log(func(obj));

// №277 2
// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

// function func(arr) {
//     let result = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result += func(arr[i]);
//         } else {
//             result += arr[i];
//         }
//     }
//     return result;
// }

// console.log(func(arr));
// №278 1
// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

// function func(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             arr[i] = func(arr[i]);
//         } else {
//             arr[i] *= arr[i];
//         }
//     }
//     return arr;
// }

// console.log(func(arr));
