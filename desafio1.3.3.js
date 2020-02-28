const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

function calculaReceita(usuarios){
  let somaReceita = 0

  for (receita of usuarios.receitas){
    somaReceita = somaReceita + receita
  }
  return somaReceita
}

function calculaDespesas(usuarios){
  let somaDespesa=0

  for (let despesa of usuarios.despesas){
    somaDespesa = somaDespesa + despesa
  }
  return somaDespesa
}

for (let x = 0; x < usuarios.length; x++) {
  const somaReceita = calculaReceita(usuarios[x])
  const somaDespesa = calculaDespesas(usuarios[x])
  const saldo = somaReceita - somaDespesa

      if (saldo>0){
        console.log(`O usuario ${usuarios[x].nome} tem o saldo positivo de ${saldo}`)
      } else {
        console.log(`O usuario ${usuarios[x].nome} tem o saldo negativo de ${saldo}`)
      }
  }


