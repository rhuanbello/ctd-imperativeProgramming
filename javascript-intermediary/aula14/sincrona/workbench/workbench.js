// Passo 1: Crie um módulo próprio, faça a sua importação em um arquivo diferente e verifique seu funcionamento

const greet = require('./greetFunction')
// importando o arquivo index do módulo criado "Greet Function"

greet('Rhuan', 'Evening')
// executando a Função greet(), que espera como parâmetro um nome e uma hora do dia


// Passo 2: Instale um módulo externo e verifique seu funcionamento

// Foi instalado o módulo "nodemon", que tem como função reiniciar nossa aplicação de forma automática sempre que nosso arquivo for editado
// nodemon foi instalado localmente com o comando: npm i --save-dev nodemon
// no arquivo package.json, foi criado um script utilizando a palavra "start" para iniciar a nossa aplicação
// como em nosso "main" está definido o diretório de nosso arquivo principal, podemos utilizálo como valor em nosso script para rodar nosso módulo nodemon
// desta forma: "start": "nodemon main"
// ao inserirmos npm start em nossa linha de comando, teremos nossa aplicação rodando em tempo realnode s   w