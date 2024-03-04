# Considerações sobre o projeto

Optei por desenvolver o projeto utilizando Vue 3 sem utilizar nenhuma biblioteca de componentes, pois como são poucas telas, entendi que criar os componentes do zero seria um modo de mostrar os meus conhecimentos no framework.

Os botões de Login, Barra de pesquisa e Localização não possuem funcionalidade, apenas implementei o layout.

O botão de ticket adicionei um simples modal para informar quais os produtos estavam no carrinho.

Como não havia um layout para disposiivos mobile, ajustei a responsividade e mantive o mesmo layout.

## Desafios no desenvolvimento

Tive um pouco de dificuldade em organizar os componentes de input para lidar com a seleção dos valores. Precisei agrupar o input de radio para validar qual deles estava selecionado e o input de contador para lidar com as ações de ação e deleção.

Considerei usar um único objeto com todas as informações necessárias para montar a página e repassar esses dados usando props para os componentes descendentes.

Para diferenciar os produtos utilizei o id. E para diferenciar especificações do mesmo produto utilizei skus.

Consegui adicionar apenas alguns testes, por conta do pinia e da Composition API o modo de acessar as informações são diferentes de como estou acostumado, por isso acabei fazendo apenas alguns testes.

## Melhorias

Ajustar o header do site no mobile, trocar para um menu hamburguer e mostrar os botões de perfil e ticket quando for clicado.

Trocar os ícones, trocando por ícones de alguma biblioteca, como FontAwesome, ou fazendo um arquivo único de imagem com todos, para diminuir o tempo de carregamento.

Adicionar funcionalidade de compra do carrinho.

Adicionar um aviso que é necessário adicionar o produto principal caso o usuário tente efetuar a compra sem ter adicionado o produto.

Implementar maior cobertura de testes.
