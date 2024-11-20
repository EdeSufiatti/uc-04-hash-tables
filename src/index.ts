console.log("Ola caralho")


//Arrays, Listas e Tuplas

const tupla: [string, string, number, boolean] = [
    "Cezar Mezalira",
    "teste@teste.com.br",
    34,
    true,
];

const tuplas: [string, string, number, boolean][] = [
    ["cezar", "teste@teste", 34, true],
    ["edemir", "teste@teste", 34, true],

];

//nome , email, idade, ativo
const nome = tupla[1][0];

//hash table -- tabela  de chave / valor

type Pessoa = {
    nome: string;
    email: string,
    idade: number;
    ativo: boolean;
    celular?: string;
};

const pessoas: Pessoa[] = [
    {
        nome: "Julio",
        email: "teste@teste",
        idade: 34,
        ativo: true,
        celular: "12312325"
    },
    {
        nome: "Ede",
        email: "teste@teste",
        idade: 34,
        ativo: true,
        celular: "12312325"

    },
];

for (const pessoa of pessoas) {
    console.log(pessoa["email"]);
}


// Criar uma matriz de 10 produtos que contenha o seguinte layout:
// id do tipo texto, nome do tipo texto, quantidade em estoque do tipo float,
// ativo do tipo boolean, data de criacao do tipo texto,
// data ultima atualizacao do tipo texto.
// A matriz deve conter os tipos corretamente, sendo na prática uma lista de tuplas.
// Exemplo de uma linha da matriz:
// [1, "MacBook", 10.5, true, "20240101", "20241118"]



type Produto = {
    id: number;
    name: string,
    qtd: number;
    ativo: boolean;
    date: string;
    dated: string,
};


const produtos: Produto[] = [
    {
       id: 1,
       name: "Martelo",
       qtd: 14,
       ativo: true ,
       date: "20241118",
       dated:"20241118"
    },
    {
        id: 2,
        name: "Prego",
        qtd: 14,
        ativo: true ,
        date: "20241118",
        dated:"20241118"
     },
     {
        id: 3,
        name: "Martelo",
        qtd: 14,
        ativo: true ,
        date: "20241118",
        dated:"20241118"
     },
     {
        id: 4,
        name: "Fenda",
        qtd: 14,
        ativo: true ,
        date: "20241118",
        dated:"20241118"
     },
     {
        id: 5,
        name: "Philips",
        qtd: 14,
        ativo: true ,
        date: "20241118",
        dated:"20241118"
     },
     {
        id: 6,
        name: "Alicate",
        qtd: 14,
        ativo: true ,
        date: "20241118",
        dated:"20241118"
     },
     {
        id: 7,
        name: "Serra",
        qtd: 14,
        ativo: true ,
        date: "20241118",
        dated:"20241118"
     },

     {
        id: 8,
        name: "Machado",
        qtd: 14,
        ativo: true ,
        date: "20241118",
        dated:"20241118"
     },
     {
        id: 8,
        name: "foice",
        qtd: 14,
        ativo: true ,
        date: "20241118",
        dated:"20241118"
     },
     {
        id: 9,
        name: "Facão",
        qtd: 14,
        ativo: true ,
        date: "20241118",
        dated:"20241118"
     },
     {
        id: 10,
        name: "Machadinha",
        qtd: 14,
        ativo: true ,
        date: "20241118",
        dated:"20241118"
     },


];

for (const produto of produtos) {
    console.log(produto.name);
}


