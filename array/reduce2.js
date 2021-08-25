const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Carlos", nota: 9.2, bolsista: true },
  { nome: "Roberta", nota: 9.8, bolsista: false },
  { nome: "Amanda", nota: 8.7, bolsista: true },
];

// Desafio 1: Todos os alunos são bolsistas?
const desafio1 = alunos
  .map((a) => a.bolsista)
  .reduce((prv, cnt) => {
    return prv == true && cnt == true ? true : false;
  });

console.log(desafio1);

// Desafio 2: Algum aluno é bolsista?
const desafio2 = alunos
  .map((a) => a.bolsista)
  .reduce((prv, cnt) => {
    return prv == true || cnt == true ? true : false;
  });

console.log(desafio2);
