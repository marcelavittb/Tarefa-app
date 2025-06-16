
# Tarefa-app 📋

Este projeto é uma aplicação web desenvolvida com Angular como parte da disciplina de Programação Front-End no curso de Análise e Desenvolvimento de Sistemas (ADS).

## 🎯 Objetivo

O objetivo deste projeto é demonstrar os principais conceitos e práticas do desenvolvimento Front-End utilizando o framework Angular, incluindo:

- Criação de componentes
- Uso de serviços
- Implementação de roteamento entre páginas
- Manipulação de dados via HTTP (simulado)
- Criação de testes com Karma e Jasmine

## 🚀 Funcionalidades

- Cadastro de novas tarefas
- Listagem de tarefas
- Remoção de tarefas
- Navegação entre páginas (Home e Sobre)
- Testes unitários no componente de item de tarefa

## 🛠️ Tecnologias utilizadas

- Angular 14
- TypeScript
- HTML5
- CSS3
- Karma e Jasmine (para testes)
- Node.js (backend de desenvolvimento - Angular CLI)

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── task-item/
│   ├── pages/
│   │   ├── home/
│   │   └── about/
│   ├── services/
│   │   └── task.service.ts
│   ├── app-routing.module.ts
│   └── app.module.ts
└── assets/
```

## ⚙️ Como executar o projeto

### Pré-requisitos:

- Node.js versão 14.x ou 16.x
- Angular CLI (versão 14)

### Passos:

1. Clone o repositório:

```
git clone https://github.com/marcelavittb/Tarefa-app.git
```

2. Acesse a pasta do projeto:

```
cd Tarefa-app
```

3. Instale as dependências:

```
npm install
```

4. Rode o servidor de desenvolvimento:

```
ng serve
```

5. Abra no navegador:

```
http://localhost:4200
```

## ✅ Testes

Para rodar os testes unitários (exemplo no componente task-item):

```
ng test
```

## 👨‍💻 Equipe de Desenvolvimento

- Nome: [Seu Nome Completo]
- RA: [Seu RA]
- (Adicione os nomes de outros membros do grupo aqui)

## 📅 Contexto Acadêmico

Este projeto faz parte da Avaliação do 2º Bimestre da disciplina Programação Front-End, ministrada pelo Professor José Carlos Domingues Flores.

## 📌 Observação

Este projeto foi desenvolvido exclusivamente para fins educacionais.
