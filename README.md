# Desafio VTEX IO - Hiring Coders

Loja criada durante o desafio VTEX IO promovido pelo Hiring Coders.

## Tema

Na pasta do tema, encontra-se a loja como um todo. O objetivo principal era criar uma loja semelhante e com as mesmas funcionalidades da [UpMedal](https://www.upmedal.com/desafios).

Para maiores detalhes sobre todas os requisitos do desafio, acesse esse [link](https://drive.google.com/file/d/1KVNKIOWI0s8m4zMkUPtjj7gsBlgjlqad/view).

## Lead Catcher

Além da loja em si, um dos requisitos era criar um component em react para cadastro de leads em uma base via AWS Gateway.

Para o componente criado, utilizei o AWS API Gateway + AWS Lambda Function + DynamoDB.

Os dados são capturados através do bloco `lead-catcher` e, através do `fetch`, faz-se uma requisição PUT para o endpoint da API no AWS.

A API por sua vez dispara o funcionamento da função Lambda que processa os dados e os insere na tabela do DynamoDB.

### Observações

Muito embora a estilização não tenha ficado como eu gostaria, acredito que o _core_ do desafio foi cumprido.

Infelizmente, tive muito pouco tempo para conseguir me dedicar ao desafio, mas ainda assim, fiquei satisfeito por ter conseguido colocar em prática boa parte do que foi aprendido nas aulas disponibilizadas pela GamaAcademy e pela VTEX.
