let bread = 9;
let vada = 2;
let samosa = 3;
var samosaPav;
var vadaPav;
let costofSamosa=15;
let costofVadaPav=10
// this fields are hardcoded because i am more into react js 
// you can change any value for that cause
// logic is not hardcoded
if (bread > 1) {
    for (bre = 1; bre <= bread; bre++) {
        if (samosa > 0) {
            for (i = 1; i <= samosa; i++) {
                samosaPav = bre;
                bread = bread - 2;
                samosa = samosa - 1;
                break;
            }
        }
    }

    for (bre = 1; bre <= bread; bre++) {
        if (vada > 0) {
            for (i = 1; i < vada; i++) {
                vadaPav = bre;
                bread = bread - 2;
                vada = vada - 1;
                break;
            }
        }
    }
}


console.log(samosaPav, "samosapav");
console.log(vadaPav, "vadapav");


console.log("Best price is",samosaPav*costofSamosa+vadaPav*costofVadaPav);
