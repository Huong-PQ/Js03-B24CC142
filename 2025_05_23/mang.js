var a = [1,34,5,6];
var b=[1,2];
alert(a.length);

// goop thanhf moot chuooxi
document.writeln(a.join('-'));

// ghesp 2 mangr
console.log(a.concat(b));

// lấy ra phần tử trong mảng
console.log(a.slice(1,3));

// đảo chiều mảng
console.log(b.reverse());

// thêm cuối mảng
b.push(44,33);
console.log(b);


// xóa phần tử ở cuối mảng
a.pop();
console.log(a);

// xóa phần tử đàu tiên trg mảng
a.shift()
console.log(a)