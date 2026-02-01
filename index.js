
let fruits = ["Apples","Bananas","Cherry"];
let numbers = [1, 2, 3, 4, 5];
let ele = [1, "hello", true, null, undefined];
let emptyArray = [];





let arra = [1,2, "three", true, null];
// in ra phần tử ở vị trí số 2 trong mảng
console.log(arr[2]);


let name = ["An","Bình","Châu"];
for (let i = 0; i < name; i++) {
}

let arr = [ 1, 2, 3, 4,];
// Thêm một phần tử vào cuối mảng
arr.push(5, 10);
console,log(arr); // Output {1,2,3,,4,5,10}

let arrm = [1,2,3,4]
// thêm phần tử vào vi trí số 1 
arrm.splice(0, 1, "Phần tử mới");
console.log(arrm); // Output [1, "phan tu moi",3,4]

const fruitss = ['apple','banana','orange','apple'];
console.log(fruitss.indexOf('banana')); // Kết quả: 1
console.log(fruitss.indexOf('apple')); // Kết quả: 0
console.log(fruitss.indexOf('grape')); // Kết quả: -1


let ma = ['a','b','c','d'];
ma.splice(2,1); // Xóa phần tử tại index
console.log(ma); // Kết quả ['a','b','d']




let animal = {
    mau: "vàng", 
    can_nang: 3.5,
    tuoi: 4,
    giong_loai: husky,
};
//// truy cập thuộc tính trong đối tượng
console.log(animal.mau);// kết quả là vàng
console.log(animal.tuoi); // kết quả là 30



 person = {
    name: "Alice",
    age: 25
};
// Thêm mỗi khóa 'gender' bằng dấu chấm
person.gender = "female";
//Thêm mỗi khóa 'occupation' bằng dấu ngoặc vuông
person["Occupation"] = "developer";
console.log(person); // Hiển thị kết quả

if ('age' in person) {
    console.log("key 'age' tồn tại trong object person");
}

if (person.hasOwnProperty('gender')) {
    console.log("Key 'gender' tồn tại trong object person");
}


let hocSinh = [
    {ten: 'An', tuoi: 15, Lop: '10A1'},
    {ten: 'Bình', tuoi: 16, Lop: '11A2'},
    {ten: 'Châu', tuoi: 15, Lop: '10A1'},
];

hocSinh.push({ten: 'Dũng', tuoi: 17, Lop: '11A3'})








let access = document.getElementById('code3');
let code = access.innerHTML;
code = code + ' midnight'
alert(code);
access.innerHTML = code;




















































