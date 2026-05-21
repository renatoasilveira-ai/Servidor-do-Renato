const os = require("os");

const plataforma = os.platform();

const memoriaLivreBytes = os.freemem();
const memoriaLivreGB = memoriaLivreBytes / 1024 / 1024 / 1024;

console.log("Seu sistema operacional é:", plataforma);
console.log("Memória livre no PC:", memoriaLivreGB.toFixed(2), "GB");