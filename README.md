
<h1 align="center">Bsale Test - Fronted</h1>
<p align="center"><img src="./img/Readme/vistaescritorio.png"/></p> 

### Tabla de contenidos:
---

- [Descripción y contexto](#descripción-y-contexto)
- [Guía de usuario](#guía-de-usuario)
- [Guía de instalación](#guía-de-instalación)
- [Información adicional](#información-adicional)


### Descripción y contexto
---

🛍 🛒 **Bsale Test - Frontend** 🛍 🛒 es una tienda online de productos diversos. 🛒🛒🛒

Es una plataforma web, enfocada para los clientes; con la finalidad de brindarles una herramienta que facilite la busqueda de productos diversos a adquirir.

Constará con vista para celulares y para computadoras de escritorio.

Puede ser accedido a traves de: <a href="https://bs20-front.netlify.app/" target="_blank">https://bs20-front.netlify.app/</a>


### Guía de usuario
---

<h2 align="center">Vista de Escritorio</h2>
<img src="./img/Readme/vistaescritorio.png" />

Al iniciar la plataforma web de 🛍 🛒 **Bsale Test - Frontend** 🛍 🛒, desde el lado del cliente se realizarán **02 peticiones** a la **API del backend** para solicitar los datos de los **"productos"** y los datos de las **"categorias"**

`Nota:` Los **"productos"** estan alojados en la tabla "productos" de la base de datos suministrados por la empresa

`Nota:` Las **"categorias"** estan alojadas en la tabla "categorias" de la base de datos suministrados por la empresa

`Nota:` La ruta del **API del backend** es: <a href="https://bs20-back.vercel.app/" target="_blank">https://bs20-back.vercel.app/</a>

<h3>GET lista de "productos"</h3>

* **GET** /api/products retornara todos los **"productos"**
* Por medio de **AXIOS** se envia la solicitud GET a la API por medio de la URL: https://bs20-back.vercel.app/api/products
* En respuesta se obtiene todos los **"productos"**
* De momento, un total de 57 productos

```json
[
   {
      "id": 53,
      "name": "Mani Sin Sal",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",
      "price": 500,
      "discount": 0,
      "category": 5
   },
   {
      "id": 55,
      "name": "Papas Fritas Bolsa Pequeña",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
      "price": 500,
      "discount": 0,
      "category": 5
   },
   ...
   {
      "id": 33,
      "name": "RON PAMPERO ANIVERSARIO",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/ron_pampero_aniversario0311.jpg",
      "price": 20000,
      "discount": 15,
      "category": 3
   }
]
```

*  Finalmente, los **"productos"** son renderizados en el frontend


<p align="center"><img src="./img/Readme/todosproductos.png"/></p> 


<h3>GET lista de "categorias"</h3>

* **GET** /api/categories retornara todas las **"categorias"**
* Por medio de **AXIOS** se envia la solicitud GET a la API por medio de la URL: https://bs20-back.vercel.app/api/categories
* En respuesta se obtiene todas las **"categorias"**
* De momento, un total de 7 categorias

```json
[
   {
      "id": 1,
      "name": "bebida energetica"
   },
   {
      "id": 2,
      "name": "pisco"
   },
   ...
   {
      "id": 7,
      "name": "vodka"
   }
]
```

*  Finalmente, las **"categorias"** son renderizadas en el "Sidebar" y en el "Select-option" del Navbar


`Nota:` Cada **"producto"** tiene un campo de **"category"** con un numero asignado entre 1 y 7.

`Nota:` Estos numeros estan relacionados con cada **"categoria"** obtenida.

`Nota:` Esto servirá para realizar el filtrado de los "productos" y ordenarlos por "categorias"

<p align="center"><img src="./img/Readme/sidebar-select.png"/></p> 


<h2 align="center">📌Filtro de productos desde el "SideBar"</h2>
<p align="center"><img src="./img/Readme/sidebar.gif"/></p>

Ahora veamos acerca del filtrado de **"productos"** por medio de las **"categorias"** en el "Sidebar"

Al dar click sobre una de las **"categorias"**, se enviará **01 peticion** a la **API del backend** para solicitar los datos de los **"productos"** filtrados por la **"categoria"** seleccionada

<h3>GET lista de "productos" filtrado por "categorias" desde el "Sidebar"</h3>

* **GET** /api/products/cat/:id retornara los **"productos"** filtrados por la **"categoria"** seleccionada
* Por medio de **AXIOS** se envia la solicitud GET a la API por medio de la URL: https://bs20-back.vercel.app/api/products/cat/:id
* En respuesta se obtiene los **"productos"** filtrados por **"categoria"**

`Nota:` En la URL https://bs20-back.vercel.app/api/products/cat/:id el valor de **":id"** debe ser reemplazado por el **"id"** de la **"categoria"** seleccionada

`Nota:` Por ejemplo, si selecciono **"pisco"**, su **"id"** es **"2"**. Entonces la URL será https://bs20-back.vercel.app/api/products/cat/2

`Nota:` Se obtendran los **"productos"** que tengan el campo **"category: 2"**

```json
[
   {
      "id": 12,
      "name": "PISCO CAMPANARIO 35º",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/campanario8845.jpg",
      "price": 2990,
      "discount": 20,
      "category": 2
   },
   {
      "id": 10,
      "name": "PISCO ARTESANOS 35º ",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/artesanos8818.jpg",
      "price": 3990,
      "discount": 0,
      "category": 2
   },
   ...
   {
      "id": 91,
      "name": "PISCO MISTRAL NOBEL 40°",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobel409551.jpg",
      "price": 19990,
      "discount": 0,
      "category": 2
   }
]
```

*  Finalmente, los **"productos"** filtrados por la **"categoria"** seleccionada, son renderizados en el frontend


<p align="center"><img src="./img/Readme/piscoproductos.png"/></p>



<h2 align="center">📌Filtro de productos desde el "Select-option" del Navbar</h2>
<p align="center"><img src="./img/Readme/select-option.gif"/></p>

Ahora veamos acerca del filtrado de **"productos"** por medio de las **"categorias"** en el "Select-option" del Navbar

Al dar click sobre una de las **"categorias"**, se enviará **01 peticion** a la **API del backend** para solicitar los datos de los **"productos"** filtrados por la **"categoria"** seleccionada

<h3>GET lista de "productos" filtrado por "categorias" desde el "Select-option" del Navbar</h3>

* **GET** /api/products/cat/:id retornara los **"productos"** filtrados por la **"categoria"** seleccionada
* Por medio de **AXIOS** se envia la solicitud GET a la API por medio de la URL: https://bs20-back.vercel.app/api/products/cat/:id
* En respuesta se obtiene los **"productos"** filtrados por **"categoria"**

`Nota:` En la URL https://bs20-back.vercel.app/api/products/cat/:id el valor de **":id"** debe ser reemplazado por el **"id"** de la **"categoria"** seleccionada

`Nota:` Por ejemplo, si selecciono **"snack"**, su **"id"** es **"5"**. Entonces la URL será https://bs20-back.vercel.app/api/products/cat/5

`Nota:` Se obtendran los **"productos"** que tengan el campo **"category: 5"**

```json
[
   {
      "id": 53,
      "name": "Mani Sin Sal",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",
      "price": 500,
      "discount": 0,
      "category": 5
   },
   {
      "id": 55,
      "name": "Papas Fritas Bolsa Pequeña",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
      "price": 500,
      "discount": 0,
      "category": 5
   },
   ...
   {
      "id": 56,
      "name": "Papas Fritas Tarro",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/78028005335657432.jpg",
      "price": 1990,
      "discount": 0,
      "category": 5
   }
]
```

*  Finalmente, los **"productos"** filtrados por la **"categoria"** seleccionada, son renderizados en el frontend


<p align="center"><img src="./img/Readme/piscoproductos.png"/></p>




<h2 align="center">📌Filtro de productos desde el "Buscador" del Navbar</h2>
<p align="center"><img src="./img/Readme/buscador.gif"/></p> 

La Aplicacion se enlaza a una API de peliculas y en la pagina principal se visualizan las mismas en "carrousel de imagenes". 
Ademas, al dar click en las imagenes, se carga una pagina adicional en donde se visualiza mas detalles **(Title, Genres, Description)** provenientes de la API

![image](https://user-images.githubusercontent.com/81504385/153693896-d6f0d70a-9924-436c-be6f-58ab2568d5f7.png)

 	
### Guía de instalación
---
* El proyecto está basado en la libreria React js
 * Se ha usado la version 6 de React-router-dom
 * Para el Navbar se ha usado React-bootstrap y bootstrap
* Para el Software de gestion de paquetes se está usando YARN
* Para la instalacion:
  * Clonar el repositorio
  * En la terminal de la carpeta clonada digitar `$ yarn install`
  * Para ejecutar el proyecto, digitar en la terminal `$ yarn start`


### Información adicional
---
### 🔭Skils:
Tecnologias utilizadas

| `🔭Frontend` | `⚡Backend` | `📫Database` |
| ------ | ------ | ------ | 
| CSS | Node js | Mysql |
| Bootstrap | Express |  |
| Javascript |  |  |


### 💻Pagina web: 📱
<ul>
<li> <a href="https://bs20-front.netlify.app/" target="_blank">https://bs20-front.netlify.app/</a> </li>
</ul>
