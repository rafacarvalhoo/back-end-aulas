// ==========================================
// SELECIONANDO ELEMENTOS DO DOM
// ==========================================

// Selecionando por ID
console.log (document.getElementById ("título"));
// Para visualização na console 

let titulo = document.getElementById ("título");
let subtítulo = document.getElementById ("subtítulo");
let parágrafo = document.getElementById ("parágrafo");
let imagem = document.getElementById ("imageteste");


// Selecione por classe 
let caixas = document.getElementsByClassName ("box");

// Mostrar no console.log
console.log (título);
console.log (caixas);
console.log (imagem);

// ====================================
// FUNÇÃO PARA ALTERAR O CONTEÚDO
// ====================================

function alterar() {
    título.innerText = "Henrique Lemos. O futuro do futebol tem nome e sobrenome"
    subtítulo.innerText = "Conheça a trajetória de Henrique Lemos, a joia do Cruzeiro que segue os passos do pai nos gramados."
    parágrafo.innerText = "Henrique Lemos é um jovem futebolista brasileiro que atua como meio-campista e lateral pelas categorias de base do Cruzeiro. Nascido em 25 de março de 2010, ele é amplamente conhecido por ser filho do lateral-direito Fagner (ex-Corinthians e atualmente também no Cruzeiro)"

    // Alterando elemento da classe 
    caixas[0].innerText = "Primeiro parágrafo alterado"
    caixas[1].innerText = "Segundo parágrafo alterado"

    // Alterando Imagem 
    imagem.src = "https://i.pinimg.com/236x/85/f2/c5/85f2c59ffc2b5d16b2d1e22aaf4f4fe1.jpg"
}