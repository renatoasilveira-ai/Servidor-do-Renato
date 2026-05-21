const fs = require("fs");

// Lendo o conteúdo do arquivo mensagem.txt
const conteudo = fs.readFileSync("mensagem.txt", "utf-8");

// Exibindo o que foi lido no terminal
console.log(conteudo);