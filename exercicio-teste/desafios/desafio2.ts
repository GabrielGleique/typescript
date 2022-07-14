enum Profissão {
    Atriz,
    Engenheiro,
    Dentista,
    Piloto
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Profissão
}

let pessoa1: Humano = {
    nome: 'Renata',
    idade: 23,
    profissao: Profissão.Dentista
};

let pessoa2: Humano = {
    nome: 'Livia',
    idade: 19,
    profissao: Profissão.Atriz
};

let pessoa3: Humano = {
    nome: 'Gustavo',
    idade: 32,
    profissao: Profissão.Piloto
};

let pessoa4: Humano = {
    nome: "Miguel",
    idade: 19,
    profissao: Profissão.Engenheiro
}