let heroi = "Tony";

let quantidadeDeXp = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

let nivelXp = 3867

if (nivelXp < 1000) {
    console.log("O Herói de nome " + heroi + " está no nível de " + quantidadeDeXp[0])
} else if ((nivelXp >= 1001) && (nivelXp <= 2000)) {
    console.log("O Herói de nome " + heroi + " está no nível de " + quantidadeDeXp[1])
} else if ((nivelXp >= 20001) && (nivelXp <= 5000)) {
    console.log("O Herói de nome " + heroi + " está no nível de " + quantidadeDeXp[2])
} else if ((nivelXp >= 50001) && (nivelXp <= 7000)) {
    console.log("O Herói de nome " + heroi + " está no nível de " + quantidadeDeXp[3])
} else if ((nivelXp >= 7001) && (nivelXp <= 8000)) {
    console.log("O Herói de nome " + heroi + " está no nível de " + quantidadeDeXp[4])
} else if ((nivelXp >= 8001) && (nivelXp <= 9000)) {
    console.log("O Herói de nome " + heroi + " está no nível de " + quantidadeDeXp[5])
} else if ((nivelXp >= 9001) && (nivelXp <= 10000)) {
    console.log("O Herói de nome " + heroi + " está no nível de " + quantidadeDeXp[6])
} else {
    console.log("O Herói de nome " + heroi + " está no nível de " + quantidadeDeXp[7])
}