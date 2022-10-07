const pecaDoXadrez = "rainha";

switch (pecaDoXadrez.toLowerCase()) {
    
    case "rei":
        console.log("Rei - Apenas uma casa e para qualquer direção.");
        break;
    case "rainha":
        console.log("Rainha - Quantas casas precisar em qualquer direção: vertical, horizontal e diagonal.");
        break;
    case "cavalo":
        console.log("Cavalo - Faz o movimento em L e pode pular sobre as peças.");
        break;
    case "torre":
        console.log("Torre - Se move na horizontal e vertical por quantas casas precisar até o fim do tabuleiro ou ser bloqueado por outra peça.");
        break;
    case "bispo":
        console.log("Bispo - Se move na diagonal por quantas casas precisar até o final do tabuleiro ou outra peça.");
        break;
    case "peao":
        console.log("Peão - Uma casa por vez somente para frente; na primeira jogada pode se mover por duas casas.");
        break;
    default:
        console.log("Erro! Peça inválida.");
        break;
}