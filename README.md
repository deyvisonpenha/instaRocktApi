# Semana Omnistack 7 Rocketseat - InstaRocket

Nesse desafio você irá construir o back-end com NodeJS da API do Instagran, para isso foi utilizado o conteudo oferecido durante a semanda Omnistack-7 da Rocketseat. Para o banco de dados é utilizado o mongoDB, para ser mais específico um cluster do mongoDB Atlas. O projeto Front-End desenvolvido em react pode ser acessado nesse [link](https://github.com/deyvisonpenha/instaRocktWeb.git)

A versão em produção esta [aqui](https://reverent-golick-595892.netlify.com/)

## Rotas

No projeto (localhost) teremos as segintes rotas:

GET
/posts  : que retornam a lista de posts criados

POST
/posts  : cria um post e para isso teremos os atributos listados na proxima sessão
/posts/:id/like : que incrementa o numero de likes

### Atributos (POST)

/post : image(file), author(string), place(string), description(string), hashtags(string)

## Entrega 

Após concluir o desafio, adicionei a API para testes no heroku como pode ser acessada no link https://instarocketapi.herokuapp.com/posts
