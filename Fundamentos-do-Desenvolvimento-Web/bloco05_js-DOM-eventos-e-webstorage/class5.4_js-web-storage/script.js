console.log(localStorage.length);
localStorage.setItem("firstName", "Adam");
localStorage.setItem("lastName", "Smith");
console.log(localStorage.getItem("lastName"));
console.log(localStorage.length);
localStorage.removeItem("lastName");
console.log(localStorage.length);
localStorage.clear();
console.log(localStorage.length);

console.log(sessionStorage.length);
sessionStorage.setItem("firstName", "Adam");
sessionStorage.setItem("lastName", "Smith");
console.log(sessionStorage.getItem("lastName"));
console.log(sessionStorage.length);
sessionStorage.removeItem("lastName");
console.log(sessionStorage.length);
sessionStorage.clear();
console.log(sessionStorage.length); 