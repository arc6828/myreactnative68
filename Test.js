let a = "Hello World";
let b = 100;
let c = 10000.500;
let d = true;
let e = [
    "apple",
    "orange",
    "mango"
];       //array : key ของ arry คือ 0 ถึง n-1
let f = {
    "app": "apple",
    "ora": "orange",
    "man": "mango"
};       //object
console.log(a, b, c, d, e);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e[0]);
console.log(f["app"]);
console.log(f.app);

const aa = "ตัวแปรที่ไม่สามารถ เปลี่ยนแปลงค่าภายหลัง"; 
let bb = "ตัวแปรที่มี scope แคบมาก (local)";
var cc = "ตัวแปรที่มี scope กว้างมาก (global)";

if(true){
    let v = "value";

    //let จะหมดอายุตรงนี้
}
console.log(v);