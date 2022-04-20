
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

Al iniciar la plataforma web de 🛍 🛒 **Bsale Test - Frontend** 🛍 🛒, desde el lado del cliente se realizarán **02 peticiones** a la **API del backend** para solicitar los datos de los "productos" y los datos de las "categorias"

`Nota:` La ruta del **API del backend** es: <a href="https://bs20-back.vercel.app/" target="_blank">https://bs20-back.vercel.app/</a>

<h3>GET lista de "productos"</h3>

* **GET** /api/products retornara todos los **productos**
* Por medio de **AXIOS** se envia la solicitud GET a la API por medio de la URL: https://bs20-back.vercel.app/api/products
* En respuesta se obtiene todos **productos**


<div class="table-wrapper" markdown="block">

|                        |ODBC | SSMS | SQLCMD | ISQL|
|---                     |:---:|:---: |:---:   |:---:|
|ANSI_NULL_DFLT_ON       | ON  | ON   | ON     | OFF |
|ANSI_NULLS              | ON  | ON   | ON     | OFF |

</div>



```json
{
   "quantity": 60.36,
   "quantityReserved": 0.0,
   "quantityAvailable": 60.36,
   "variant": {
       "href": "https://api.bsale.cl/v1/variants/351.json",
       "id": "351"
   },
   "office": {
       "href": "https://api.bsale.cl/v1/offices/2.json",
       "id": "2"
   }
}
```


<h2 align="center">📌Filtro de productos desde el "SideBar"</h2>
<p align="center"><img src="./img/Readme/sidebar.gif"/></p>

```json
{
   "quantity": 60.36,
   "quantityReserved": 0.0,
   "quantityAvailable": 60.36,
   "variant": {
       "href": "https://api.bsale.cl/v1/variants/351.json",
       "id": "351"
   },
   "office": {
       "href": "https://api.bsale.cl/v1/offices/2.json",
       "id": "2"
   }
}
```

<h2 align="center">📌Filtro de productos desde el "Select-option" del Navbar</h2>
<p align="center"><img src="./img/Readme/select-option.gif"/></p>

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
