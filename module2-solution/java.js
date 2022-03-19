let a = 0;
a++;
setTimeout(()=> a = a+3, 600);
a = a+3;
setTimeout(()=> a = a+1, 200);
console.log(a);
setTimeout(()=> console.log(a), 500);