let contagemCliques = 0;
let cps = 0;
let comecarTempo = Date.now();

document.getElementById("clicarBotao").addEventListener("click", function(){
    contagemCliques++;
    atualizarClique();
});

function atualizarClique(){
    document.getElementById("contagemCliques").textContent = contagemCliques;
}

setInterval(function(){
    let tempoPassado = (Date.now() - comecarTempo) / 1000;
    cps = contagemCliques / tempoPassado;
    contagemCliques = 0;
    comecarTempo = Date.now();
    document.getElementById("cps").textContent = cps.toFixed(2);
}, 1000);
