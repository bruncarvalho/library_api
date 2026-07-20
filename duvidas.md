Ver como funciona o nodemon e como instalá-lo.
R. Reinicia o servidor de aplicações automaticamente em Node.js

Entendendo o repository, eu sei que ele é responsável pela comunicação com o banco, como inserir os dados no banco, buscar... porém estou entendendo como posso serparar isso do service, usando o service para chamar o repository, e o repository realizar as queries, querie é uma dor minha.

Nessa fase do projeto, como não encontrei artigos que fizesse com essa modelagem ou "arquitetura" estou tendo que buscar em vários tutoriais como fazer o que preciso, então estou fazendo só a parte do criate primeiro, tentando fazer ela inteira, desde a requisição até o insert no banco, para daí fazer as outras rotas, porque acho que assim será mais fácil pra mim nesse primeiro momento.

Estou começando a parte de validação dos campos para inserir no banco de dados, encontrei um tutorial onde a pessoa utilizou o express-validator, pelo que entendi ele ainda é utilizado, então estou entendendo como funciona na documentação oficial.
  - Percebi que é mais complexo do que eu esperava, então optei por fazer uma validação de entrada mais simples
  - Validações de entrada, como ser os dados existem ou estão corretos ficam no controller, validações da lógica, como por exemplo se o autor existe no banco, fica no service.


  ### Dúvidas:

  ## Diferença entre PUT e PATCH
  O PUT atualiza o objeto inteiro, o PATCH substitui apenas um dado se necessário.


  ### Testes falhados
  Ao tentar criar um autor com a data incorreta, foi exibido a mensagem de "Autor cadastrado com sucesso!", porém não foi, foi barrado no sql.

