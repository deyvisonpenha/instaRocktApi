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

# gerar conexão https

openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365

## Result api cloudinary

{ public_id: 'ups433i5zy7hlv9n7fey',
  version: 1567525257,
  signature: '4c4be7ecbaa342f35df6d821ed88ada5a8631444',
  width: 500,
  height: 281,
  format: 'jpg',
  resource_type: 'image',
  created_at: '2019-09-03T15:40:57Z',
  tags: [],
  bytes: 21115,
  type: 'upload',
  etag: 'e30c30d07f737f79751f99cf9f0fab82',
  placeholder: false,
  url:
   'http://res.cloudinary.com/deyvisonpenha/image/upload/v1567525257/ups433i5zy7hlv9n7fey.jpg',
  secure_url:
   'https://res.cloudinary.com/deyvisonpenha/image/upload/v1567525257/ups433i5zy7hlv9n7fey.jpg',
  original_filename: 'Captura de tela de 2019-07-29 15-05-17' } undefined
