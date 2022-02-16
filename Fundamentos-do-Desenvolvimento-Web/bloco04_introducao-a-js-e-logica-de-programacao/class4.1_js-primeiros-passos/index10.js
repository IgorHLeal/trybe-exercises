const custo = 159;
const venda = 200;

if (custo >= 0 && venda >= 0) {
    const custoTotal = custo * 1.2;
    const lucro = (venda - custoTotal) * 1000;
    console.log(lucro);
} else {
    console.log("Erro! Os valores não podem ser menores que zero.");
}