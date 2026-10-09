// ============================
// NOSSA API DE CACHORROS 
// ============================
// 
// Agora as fotos NÃO são mais baixadas automaticamente!.
// Elas DEVEM existir manualmente na pasta
// data/fotos
// =========================================================

// ROTAS: 
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importar o farmework Express para criar o servidor
const express = require ("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require ("cors");
// Importa o módulo de arquivos do NODE
const fs = require ("fs")
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require ("path");
// Importa o arquivo JSON que contém as raças e fotos
const cachorros = require ("./data/dogs.json")
// Cria a aplicação Express
const app = express();
// Definir a porta onde o servidor irá rodar 
const PORT = 3000; 
// Habilitar o uso do CORS na aplicação
app.use(cors());

// ============================================
// SERVIR ARQUIVOS ESTÁTICOS
// ============================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL/fotos"
// Exemplo:
// http://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") //caminho real da pasta do servidor
    ) 
)

// ==========================================
// FUNÇÃO AUXILIAR
// ==========================================

// Função que recebe um array e retorna um item aleatótio dele
function sortear (array) {
    // Gera um número aleatório entre 0 e o tamanho do array
    // array.length - Conta quantos itens existem na lista
    // math.random() - Sorteia um número decimal enter 0 e 1
    // math.random() * array.length - Multiplica o número sorteado pela quantidade de itens
    // math.floor() - Tira a parte decimal, arredondando para baixo.
    const i = Math.floor(Math.random() * array.length)
    // const i = Guarda a posição na variável
    // Retorna o item sorteado
    return array[i];
}