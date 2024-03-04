# Desafio técnico Aiqfome

## Preview

![Preview](https://github.com/RafaPaludo/aiqfome-desafio/blob/master/.github/aiqfome.gif)

---

Este é um desafio técnico que tem por finalidade testar minhas habilidades com programação frontend.

O desafio consiste na criação de uma página de pedido de comida que exibe um produto principal e diversos complementos. É possível adicionar e remover produtos no carrinho de compras e ver em tempo real o carrinho ser atualizado conforme novos itens são adicionados, removidos ou alterados.

Este projeto é composto por uma aplicação frontend utilizando Vue 3, Pinia para geranciamento de estado e Sass como preprocessador de CSS.

Você pode acessar a aplicação rodando [aqui](http://35.173.236.69:5000/) ou seguir com algum métido de instalação definido abaixo.

## Escolha um método de instalação
- [Instalação Local com Node.js](#instalação-local-com-nodejs)
- [Instalação com Docker](#instalação-com-docker)
- [Instalação com Docker Compose](#instalação-com-docker-compose)

## Instalação Local com Node.js

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

1. Clone o repositório:
   ```bash
   git clone git@github.com:RafaPaludo/aiqfome-desafio.git
   cd aiqfome-desafio

2. Instale as dependências:
    ```bash
     npm install

3. Inicie o servidor:
     ```bash
     npm run dev

Você pode acessar a aplicação em http://localhost:5000.

----

## Instalação com Docker

Certifique-se de ter o Docker instalado em sua máquina. Você pode baixá-lo em [docker.com](https://www.docker.com/).

1. Clone o repositório:
   ```bash
   git clone git@github.com:RafaPaludo/aiqfome-desafio.git
   cd aiqfome-desafio

3. Faça o build da aplicação:
    ```bash
    docker build -t aiqfome-desafio .

4. Suba as duas imagens:
    ```bash
    docker run -d -it -p 5000:5000 aiqfome-desafio

Você pode acessar a aplicação em http://localhost:5000.

----

## Instalação com Docker Compose

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Você pode baixá-los em docker.com.

1. Clone o repositório:
   ```bash
   git clone git@github.com:RafaPaludo/aiqfome-desafio.git
   cd aiqfome-desafio

2. Execute o Docker Compose:
   ```bash
   docker compose up -d 
   
Você pode acessar a aplicação em http://localhost:5000.


---- 

## Testes de componentes com Cypress

## Para rodar os testes em linha de comando:

1. Executar o Cypress em linha de comando:
   ```bash
   npm run test:unit


## Para rodar os testes em um navegador web:

1. Executar o Cypress em um navegador web:
   ```bash
   npm run test:components

2. Clique na opção Component Testing.

3. Escolha um navegador e clique em "Start Component Testing".

4. Clique no nome do componente de test.