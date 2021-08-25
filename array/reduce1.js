const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Carlos", nota: 9.2, bolsista: true },
  { nome: "Roberta", nota: 9.8, bolsista: false },
  { nome: "Amanda", nota: 8.7, bolsista: true },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  }, 0);

console.log(resultado);
