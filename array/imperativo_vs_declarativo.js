const alunos = [
  { nome: "João", nota: 7.3 },
  { nome: "Carlos", nota: 9.2 },
  { nome: "Roberta", nota: 9.8 },
  { nome: "Amanda", nota: 8.7 },
];

// Imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Declarativa
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);
