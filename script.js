// Lista de curiosidades sobre a Copa do Mundo
const curiosidades = [
    "A primeira Copa do Mundo foi realizada no Uruguai em 1930 e o país anfitrião foi o campeão.",
    "O Brasil é o único país que participou de todas as edições da Copa do Mundo.",
    "Pelé é o jogador mais jovem a vencer uma Copa do Mundo, com apenas 17 anos em 1958.",
    "O maior artilheiro da história das Copas é o alemão Miroslav Klose, com 16 gols no total.",
    "A Copa do Mundo de 2026 é a primeira da história a ser sediada por três países simultaneamente: EUA, México e Canadá."
];

// Selecionando os elementos da página
const textoCuriosidade = document.getElementById('curiosidade');
const botao = document.getElementById('btn-curiosidade');

// Função para mudar a curiosidade na tela
botao.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    textoCuriosidade.textContent = curiosidades[indiceAleatorio];
});
