# Checklist Timer

Um aplicativo simples de checklist e timer desenvolvido com React. O aplicativo permite adicionar tarefas a uma lista, marcá-las como concluídas e ver o tempo decorrido usando um cronômetro. As tarefas são persistidas nos cookies do navegador, garantindo que as informações sejam mantidas entre as sessões.

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Exibir e atualizar o tempo decorrido
- Persistir tarefas no nave gador usando cookies
- Tarefas concluídas desaparecem suavemente

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **CSS Modules**: Para modularização e escopo local dos estilos.
- **Cookies**: Para persistir as tarefas entre as sessões.

## Instalação

Para configurar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   `git clone https://github.com/seu-usuario/checklist-timer.git`

2. Navegue para o diretório do projeto:

   `cd checklist-timer`

3. Instale as dependências:

   `npm install`

4. Inicie o servidor de desenvolvimento:

   `npm run dev`

O aplicativo estará disponível em http://localhost:3000.

## Uso

1. Adicionar Tarefas: Digite uma nova tarefa no campo de entrada e clique no botão "Adicionar" para adicioná-la à lista de tarefas.

2. Concluir Tarefas: Clique na caixa de seleção ao lado de uma tarefa para marcá-la como concluída. A tarefa desaparecerá suavemente para a esquerda.
3. Controlar o Timer: Utilize os botões "Start", "Pause" e "Stop" para controlar o cronômetro.

## Estrutura do Projeto

- src/: Contém os arquivos de código-fonte.
  - App.js: Componente principal do aplicativo.
  - Timer.module.css: Arquivo de estilos CSS para o componente Timer.
- public/: Contém arquivos estáticos.
- package.json: Gerencia as dependências e scripts do projeto.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou correções, por favor, abra uma issue ou um pull request no GitHub.

## Licença

Este projeto é licenciado sob a MIT License.

Isso cobre todas as seções e detalhes do projeto em Markdown. Você pode copiar e colar isso diretamente no arquivo `README.md` do seu repositório GitHub.
