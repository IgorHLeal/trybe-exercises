"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turn = exports.Doors = exports.Colors = void 0;
var Colors;
(function (Colors) {
    Colors["BLACK"] = "preta";
    Colors["WHITE"] = "branca";
    Colors["RED"] = "vermelha";
    Colors["SILVER"] = "prata";
})(Colors = exports.Colors || (exports.Colors = {}));
;
var Doors;
(function (Doors) {
    Doors["DRIVER"] = "do motorista";
    Doors["RIDE"] = "do carona";
    Doors["BEHIND_DRIVER"] = "de tr\u00E1s do motorista";
    Doors["BEHIND_RIDE"] = "de tr\u00E1s do carona";
})(Doors = exports.Doors || (exports.Doors = {}));
var Turn;
(function (Turn) {
    Turn["RIGHT"] = "direita";
    Turn["LEFT"] = "esquerda";
})(Turn = exports.Turn || (exports.Turn = {}));
