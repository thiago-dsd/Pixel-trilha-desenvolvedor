// Crie sua função aqui
function filterContainsA (listaPalavras){
  listaFiltrada = listaPalavras.filter(palavra => palavra.search('A') != -1 || palavra.search('a') != -1 );
  return listaFiltrada
}
// Não altere as linhas abaixo
console.log(filterContainsA([
  'abacaxi',
  'nuvem',
  'Abismo',
  'KOMBI',
  'TERRA',
  'felicidade',
  'Urso',
  'queijo',
]))

/*
 .search('X') retorna -1 se o elemento X não é encontrado na String,
 se o elemento X for encontrado retorna o índice do elemento dentro da string.
 Como é um método casesensitive, é preciso fazer o teste para 'A' e para 'a'

 fonte: https://www.w3schools.com/jsref/jsref_search.asp
*/