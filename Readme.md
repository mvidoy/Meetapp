yarn init -y
yarn add express
yarn add sucrase nodemon -D

yarn dev => Executa a aplicação no servidor.

Windows (Recursos) => Ativar Hiper-V
Obs. O sistema será atualizado (pode demorar alguns minutos)

https://docs.docker.com/install/linux/docker-ce/ubuntu/
https://hub.docker.com/_/postgres

docker.exe run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

ID do contaner (database): 1ea52062befb1226d4f49514ee8bfbcf311c08b3d400ca9802530b2b0bdea2c7

docker ps
docker stop database
docker start database
docker logs database


https://electronjs.org/apps/postbird
Criar a database: meetapp

yarn add eslint
remover package-lock.json
yarn

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

yarn eslint --fix src --ext .js

modulo 02

yarn add sequelize
yarn add sequelize-cli -D

yarn add pg pg-hstore

yarn sequelize migration:create --name=create-users => Cria um arquivo em src\database\migrations
yarn sequelize db:migrate => Cria a tabela users na base de dados: meetapp
//yarn sequelize db:migrate:undo => Desfaz á última migration.

yarn add bcryptjs

yarn add jsonwebtoken

https://www.md5online.org/

yarn add yup

Modulo 03: Avatar do usu�rio

yarn add multer

yarn sequelize migration:create --name=create-files
yarn sequelize db:migrate

yarn add date-fns

Modulo 03: Migration e model de agendamento
yarn sequelize migration:create --name=create-meetups

Depois que os campos foram definidos no create-meetups.js:
yarn sequelize db:migrate

yarn sequelize migration:create --name=create-subscriptions

Depois que os campos foram definidos no create-subscriptions.js:

Modulo 03: Valida��es de agendamento
yarn add date-fns@next

Modulo 03: Configurando MongoDB
docker.exe run --name mongobarber -p 27017:27017 -d -t mongo

Status: Downloaded newer image for mongo:latest
6feb6ec26d843deb7bbb85d6405d61634c0711e885dc7e80d090109d4b0e9833

http://localhost:27017/
It looks like you are trying to access MongoDB over HTTP on the native driver port. = TUDO OK

yarn add mongoose

Modulo 03: Notificando novos agendamento
https://www.mongodb.com/products/compass
https://www.mongodb.com/download-center/compass

Modulo 03: Configurando Nodemailer
yarn add nodemailer

https://mailtrap.io/

Modulo 03: Configurando templates de e-mail
yarn add express-handlebars nodemailer-express-handlebars

Modulo 03: Configurando fila com Redis

docker.exe run --name redisbarber -p 6379:6379 -d -t redis:alpine
Status: Downloaded newer image for redis:alpine
71fb69c0d40ab057d80d358f01bd53789357d097d1a49267c4d76d33f7c2683a

yarn add bee-queue


Modulo 03: Tratamento de exce��es
https://sentry.io/welcome/
yarn add @sentry/node@5.4.3
yarn add express-async-errors
yarn add youch

Modulo 03: Vari�veis ambiente
yarn add dotenv





