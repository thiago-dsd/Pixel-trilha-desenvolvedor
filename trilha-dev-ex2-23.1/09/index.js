// Crie sua função aqui
function filterLegalAge (mapNomeEIdade){
  var listaFiltrada = mapNomeEIdade.filter(idadeMaior18);
  return listaFiltrada;
}
function idadeMaior18 (mapNomeEIdade){
  if (mapNomeEIdade.age >= 18){
    return mapNomeEIdade;
  }
}

// Não altere as linhas abaixo
console.log(filterLegalAge([
  {
    name: 'Maria',
    age: 1
  },
  {
    name: 'Gabriel',
    age: 10
  },
  {
    name: 'Matheus',
    age: 18
  },
  {
    name: 'Ana',
    age: 29
  },
]))