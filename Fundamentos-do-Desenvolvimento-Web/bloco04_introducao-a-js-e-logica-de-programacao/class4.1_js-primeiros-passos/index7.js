let nota = 145;

if (nota < 0 || nota > 100){
    console.log("Nota inválida! Favor informar um valor entre 0 e 100.");
} else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else {
    console.log("F");
}