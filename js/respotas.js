const nomes = ["Fernanda", "Juliana", "Maria Eduarda", "Jader", "Renan", "Gabriel", "Beatriz", "Evelin", "Magnus Carlsen"]

export function aleatório (lista) {
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

export const name = aleatorio(nomes);