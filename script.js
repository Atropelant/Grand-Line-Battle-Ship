const imagens = [
    "bomba.png", 
    "Ship-1.png", 
    "Ship-2.png", 
    "Ship-3.png", 
    "Wave.png"
];

let tab = [];

function tabela() {
    const tabela = document.createElement("table");

    for (let l = 0; l < 10; l++) {
        const linha = document.createElement("tr");
        tab[l] = [];
        for (let c = 0; c < 10; c++) {
            const coluna = document.createElement("td");
            // sorteiação
            const indice = Math.floor(Math.random() * imagens.length);
            tab[l][c] = imagens[indice];
            const img = document.createElement("img");
            // tiroteioo
            img.src = "Fire-icon.png";
            img.width = 50;
            img.id = l + "-" + c;
            img.onclick = function () {
                atirar(l, c);
                img.onclick = null
            };
            coluna.appendChild(img);
            linha.appendChild(coluna);
        }

        tabela.appendChild(linha);
    }

    document.getElementById("tab").appendChild(tabela);

}
let coracao = 5;
let pontos = 0
let click = []
let volume = 1

function atirar(linha, coluna) {
    let imagem = document.getElementById(linha + "-" + coluna);
    let valor = tab[linha][coluna];
    imagem.src = "" + valor;
    if (valor === "bomba.png") {
        coracao--;
        const granada = document.getElementById("granada");
        granada.play(); 
        const vida = document.getElementById("vidas");
        if (coracao == 4) {
            vida.innerHTML = "❤️❤️❤️❤️";
        } 
        else if (coracao == 3) {
            vida.innerHTML = "❤️❤️❤️";
        } 
        else if (coracao == 2) {
            vida.innerHTML = "❤️❤️";
        } 
        else if (coracao == 1) {
            vida.innerHTML = "❤️";
        } 
        else if (coracao <= 0) {
           
            const tab = document.getElementById('tab')
            tab.style.display = 'none';
            vida.innerHTML ='💀'+'MORRIDO'+'💀'
            vida.style.color = "goldenrod";
            const gameOver = document.getElementById("gameover")
            gameOver.play();

        }
    }
    else if (valor === "Ship-1.png") {
        pontos += 80;
        const pontuacaoTela = document.getElementById("pontuacao");
        pontuacaoTela.innerHTML = pontos;
        const win = document.getElementById("win");
        win.play();
        win.volume = 0.2;
    }
    else if (valor === "Ship-2.png") {
        pontos += 90;
        const pontuacaoTela = document.getElementById("pontuacao");
        pontuacaoTela.innerHTML = pontos;
        const win = document.getElementById("win");
        win.play();
        win.volume = 0.2;
    }
    else if (valor === "Ship-3.png") {
        pontos += 100;
        const pontuacaoTela = document.getElementById("pontuacao");
        pontuacaoTela.innerHTML = pontos;
        const win = document.getElementById("win");
        win.play();
        win.volume = 0.2;
    }

    else if(valor === "Wave.png"){
        pontos += 10;
        const pontuacaoTela = document.getElementById("pontuacao");
        pontuacaoTela.innerHTML = pontos;
        const mar = document.getElementById("mar");
        mar.play();
        mar.volume = 0.3;
    }
}

function tocar() {
    document.getElementById("musicaDurante");
    const audio = document.getElementById("musicaDurante");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


tabela();

function resetarJogo() {
    console.log("foi")
    tab = [];
    coracao = 5;
    pontos = 0;
    const tabuleiro = document.getElementById("tab");
    tabuleiro.innerHTML = "";
    document.getElementById("vidas").innerHTML = "❤️❤️❤️❤️❤️";
    document.getElementById("pontuacao").innerHTML = "0";
    tabuleiro.style.display = 'block'
    tabela();
}
