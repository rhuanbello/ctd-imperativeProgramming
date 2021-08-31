let shoppingList = ['Arroz', 'Feijão', 'Açúcar', 'Café', 'Chá', 'Achocolatado', 'Pão']

console.log('Utilizando a propriedade "length" para exibir o número de elementos da Array:')
console.log('O número de elementos da Array shoppingList é: ' + shoppingList.length + '\n')

console.log('Utilizando o método "join()" para transformar os elementos da Array em String, separados por um traço:')
console.log('A Array shoppingList do tipo String separada por traços é: ' + shoppingList.join(' - ') + '\n')

console.log('Utilizando o método "pop()" para remover e retornar o último elemento da Array')
console.log('Exibindo o último elemento da Array:')
let ultimoElemento = shoppingList.pop()
console.log(ultimoElemento)
console.log('Exibindo a Array sem o último elemento:')
console.log(shoppingList)

console.log('Utilizando o método "push()" para adicionar ao final da array um elemento e retornar o novo total de elementos')
shoppingList.push(ultimoElemento)
console.log('Exibindo a Array com o último elemento adicionado novamente')
console.log(shoppingList)

console.log('Utilizando o método "shift()" para remover e retornar o primeiro elemento da Array')
let primeiroElemento = shoppingList.shift()
console.log('Exibindo o primeiro elemento da Array')
console.log(primeiroElemento)
console.log('Exibindo a Array sem o primeiro elemento')
console.log(shoppingList)

console.log('Utilizando o método "unshift()" para adicionar ao início da array um elemento e retornar o novo total de elementos')
shoppingList.unshift(primeiroElemento)
console.log('Exibindo a Array com o primeiro elemento adicionado novamente')
console.log(shoppingList)

console.log('Utilizando o método indexOf() para pesquisar na array por algum elemento ou caractere')
console.log('Será retornado o indíce na array deste elemento, partindo do 0:')
console.log(shoppingList.indexOf('Feijão'))

console.log('Caso o elemento ou caractere não exista, será retornado -1:')
console.log('A String "Nescau" existe na array shoppingList?')
console.log(shoppingList.indexOf('Nescau'))

console.log('Utilizando o método lastIndexOf() para pesquisar na array por algum elemento ou caractere, dando prioridade ao último encontrado')
console.log('Será retornado o indíce na array do último elemento encontrado')
console.log(shoppingList.lastIndexOf('Feijão'))

console.log('Utilizando o método includes() para retornar um valor booleano caso o caractere/elemento exista ou não')
console.log('A string "Pão" existe na array shoppingList?')
console.log(shoppingList.includes('Pão'))
console.log('A string "Amendoim" existe na array shoppingList?')
console.log(shoppingList.includes('Amendoim'))

