<h1 align='center' color="pink">Projecto-HGB</h1>

<h2 align='center'>BANNER IMAGEM</h2>

## Descrisão do Projecto
---

> Esse é um projecto que tem ideia de uma landing page para emissão de certificados para os 
> participantes de um congresso de saúde. Nela é feita a insereção dos dados por parte do participante
> afim de conseguir o seu certificado de participação que será gerando no e enviado pra ele no seu endereço
> de e-mail

<p align='center'>🚧O HGB 🚀 Em construção... 🚧</p>

## Indices
---

  - [Descrisão do Projecto](#descrisão-do-projecto)
  - [Features](#features)
  - [Começando a usar](#começando-a-usar)
  - [Tecnologia usada](#tecnologia-usada)
  - [Autores](#autores)
  - [Licença](#licença)   
  - [Expressões de gratidão](#expressões-de-gratidão)

## Funcionalidades 
---

> Aqui temos as funcionalidades desenvolvidas nesse projectos:

- [] exemplo

## Começando a usar
---

> Para que esse projecto possa funcionar na sua máquina deve-se cumprir os seguintes requisitos
>e depois seguir passo a passo como instalar o projecto.

### Pré-requisitos
> Para se ter esse projecto a funcionar deve se ter o [Nodejs](https://nodejs.org/pt-br/download) na >sua maquina que vai permitir com que projecto rode na sua maquina, [Git](https://git-scm.com/downloads), conseguir clonar o projecto na sua >máquina, [Vscode](https://code.visualstudio.com/download) fazer algumas alterações do projecto.

### instalação do projecto
```bash
 # Primeiro clonar o projecto
    git clone <https://github.com/marta-devs/project-hgb.git>

 # Acender a pasta
    cd project-hgb

 # instalar as dependencias do projecto
    npm install

 # Antes de rodar o projecto criam a pasta docs no directorio raiz
 # Para rodar o servidor
    npm run dev

 # Depois só confirmar na porta apresentada no console.
```

### Regras para publicar
 
```bash
 # git pull deve ser feito antes de se fazer um git push
    git pull

 # Para publicar o projecto no repositório 
    git push / push origin master

 #obs.: não esquecer de dar um git commit -a -m "nome do comite", para não dar erros desnecessarios
```

### Routas para acessar o projecto na web quando servidor tiver rodando 
    ````
      # Rota da pagina principal
      localhost:3333/

      #Rota da pagina do modal para trabalhar no modal(será eliminada depois)
      localhost:3333/formulario
    ````

## Tecnologia usada
---

> Durante a criação desse projecto foram usada bibliotecas e framework que possibitaram e facilitaram
> o desenvolvimento do HELPDesktop, sendo assim temos a lista:

 - [bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
 - [express](https://github.com/expressjs/express) usado para criar servidores e renderizar nossa pagina.
 - [nodemon](https://nodemon.io/) usado para salvar as nossa alterações de forma automatica por isso é uma dependencia de desenvolvimento.
 - [ejs](https://ejs.co/#install) Nos permite que possamos usar informações do js directamente no html como por exemplo informações ou dados que saem do nosso banco de dados para html sem necessidade de consumir api e permite também criar components ou isolar uma parte do nosso html para que possa ser reusado.
 -[fs-extra](https://www.npmjs.com/package/fs-extra) usado para buscar arquivo, escrever arquivo, deletar arquivo do sistema.
 -[handlebars](https://handlebarsjs.com/) usado para converter arquivo .hbs para html, visto que o hbs permite receber valores por meio de "{{nome: 'qualquerNome'}}" isso ajuda a dinamizar em vez
 de introduzir valor por meio de um js.
 -[puppeteer](https://pptr.dev/) é uma biblioteca que do nodejs que tem em si chrome/chromium permite fazer operações do navegador usando nodejs. Nesse projecto estamos usando ele para cria arquivo pdf por meio de arquivo html, isso é uma das funcionalidade do navegador.

## Autores
---

> Projecto desenvolvido pelos membros da marta

## Licença
---

>Este projecto está sob a licença MIT <a href="./LICENSE">licença</a> 
 
