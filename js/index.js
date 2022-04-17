//URL API products
const API_URL_PRODUCTS = 'http://localhost:8080/api/products';
//URL API categories
const API_URL_CATEGORIES = 'http://localhost:8080/api/categories';

//DOM
const d = document,
  /* variables de PRODUCTOS */
  $table = d.querySelector(".crud-table"),
  $template = d.getElementById("crud-template").content,
  $form = d.querySelector(".crud-form"),

  /* variables de SIDEBAR */
  $side = d.querySelector(".crud-sidebar"),
  $template2 = d.getElementById("sidebar-template").content,

  /* variables de SELECT-OPTION */
  $select = d.querySelector(".crud-select"),
  $template3 = d.getElementById("select-template").content,

  $fragment = d.createDocumentFragment();

// GET ALL DATA - PRODUCTS
/**
   * Por medio de AXIOS se interactua con la API del backend para consulta de informacion de la base de datos
   */
const getAllProduct = () => {

  //Clean all
  $table.innerHTML = "";
    
  //Filter title
  document.querySelector(".titulofiltro").textContent = "Todos los productos";
  document.querySelector(".titulofiltro").style.marginTop = "0px";

  //Loader On
  document.getElementById("loader").style.display = "block";
  document.getElementById("crud-table").style.display = "none";
  document.querySelector("body").style.pointerEvents = "none";

  document.querySelector(".titulofiltro").style.marginTop = "0px";


  // AXIOS - Get all data from "product table" and render in "front"
  /**
   * En el front, se cargan los PRODUCTOS
   */
  axios.get(API_URL_PRODUCTS)
    .then(function (response) {
      console.log(response.data);
      let data = response.data;

      /**
      * Mapeado de la data que proviene de la API y se muestran los PRODUCTOS
      */
      data.forEach(el => {
        $template.querySelector(".p_img").src = (el.url_image == "" || el.url_image === null) ? "./img/noimage.png" : el.url_image;
        $template.querySelector(".p_name").textContent = el.name;
        $template.querySelector(".p_price").textContent = el.price;
        $template.querySelector(".p_price").style.textDecoration = (el.discount == 0) ? "" : "line-through"

        $template.querySelector(".p_discount").textContent = el.price - el.discount;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $table.appendChild($fragment);

      //Loader Off
      document.getElementById("loader").style.display = "none";
      document.getElementById("crud-table").style.display = "block";
      document.querySelector("body").style.pointerEvents = "visible";

    })
    .catch(function (error) {
      console.log(error);
      //Clean all
      $table.innerHTML = "";

      if (error.response.status == 500) {
        document.querySelector(".titulofiltro").textContent = error.response.data.message;
        document.querySelector(".titulofiltro").style.marginTop = "30px";
      }

      //Loader Off
      document.getElementById("loader").style.display = "none";
      document.getElementById("crud-table").style.display = "block";
      document.querySelector("body").style.pointerEvents = "visible";
    });

}


// GET ALL DATA - CATEGORIES - SIDEBAR LEFT
/**
   * Por medio de AXIOS se interactua con la API del backend para consulta de informacion de la base de datos
   */
const getAllCategory = () => {

  //Loader On
  document.getElementById("loader").style.display = "block";
  document.getElementById("crud-table").style.display = "none";
  document.querySelector("body").style.pointerEvents = "none";

  document.querySelector(".titulofiltro").style.marginTop = "0px";


  // AXIOS - Get all data from "category table" and render in "sidebar left"
  /**
   * En sidebar left, se carga las CATEGORIAS
   */
  axios.get(API_URL_CATEGORIES)
    .then(function (response) {
      console.log(response.data);
      let data2 = response.data;

      data2.forEach(el => {
        $template2.querySelector(".s_name").textContent = el.name;
        $template2.querySelector("span").dataset.id = el.id;
        $template2.querySelector("span").dataset.name = el.name;

        let $clone2 = d.importNode($template2, true);
        $fragment.appendChild($clone2);
      });

      $side.appendChild($fragment);

    })
    .catch(function (error) {
      console.log(error);
      //Clean all
      $table.innerHTML = "";

      if (error.response.status == 500) {
        document.querySelector(".titulofiltro").textContent = error.response.data.message;
        document.querySelector(".titulofiltro").style.marginTop = "30px";
      }

      //Loader Off
      document.getElementById("loader").style.display = "none";
      document.getElementById("crud-table").style.display = "block";
      document.querySelector("body").style.pointerEvents = "visible";
    });

}


// GET ALL DATA - CATEGORIES - SELECT-OPTION
/**
   * Por medio de AXIOS se interactua con la API del backend para consulta de informacion de la base de datos
   */
const getAllSelect = () => {

  //Loader On
  document.getElementById("loader").style.display = "block";
  document.getElementById("crud-table").style.display = "none";
  document.querySelector("body").style.pointerEvents = "none";

  document.querySelector(".titulofiltro").style.marginTop = "0px";


  // AXIOS - Get all data from "category table" and render in "navbar select-option"
  /**
   * En select-option del navbar, se carga las CATEGORIAS
   */
  axios.get(API_URL_CATEGORIES)
    .then(function (response) {
      console.log(response.data);
      let data3 = response.data;

      data3.forEach(el => {
        $template3.querySelector(".sel_name").textContent = el.name;
        $template3.querySelector(".sel_name").dataset.id = el.id;
        $template3.querySelector(".sel_name").dataset.name = el.name;
        $template3.querySelector(".sel_name").value = el.id;
        let $clone3 = d.importNode($template3, true);

        $fragment.appendChild($clone3);
      });

      $select.appendChild($fragment);

    })
    .catch(function (error) {
      console.log(error);
      //Clean all
      $table.innerHTML = "";

      if (error.response.status == 500) {
        document.querySelector(".titulofiltro").textContent = error.response.data.message;
        document.querySelector(".titulofiltro").style.marginTop = "30px";
      }

      //Loader Off
      document.getElementById("loader").style.display = "none";
      document.getElementById("crud-table").style.display = "block";
      document.querySelector("body").style.pointerEvents = "visible";
    });

}

d.addEventListener("DOMContentLoaded", getAllProduct);
d.addEventListener("DOMContentLoaded", getAllCategory);
d.addEventListener("DOMContentLoaded", getAllSelect);


// SEARCH BAR
/**
 * Filtra los productos en base al nombre ingresar en el "Search Bar" y los muestra en pantalla.
 * @param {string} el valor del "Search Bar" es enviado por AXIOS al Backend para el filtrado
 */
d.addEventListener("submit", e => {
  if (e.target === $form) {
    e.preventDefault();
    console.log(e.target.sb.value);

    //Filter title
    document.querySelector(".titulofiltro").textContent = "Resultado de Busqueda";
    document.querySelector(".titulofiltro").style.marginTop = "0px";

    //Loader On
    document.getElementById("loader").style.display = "block";
    document.getElementById("crud-table").style.display = "none";
    document.querySelector("body").style.pointerEvents = "none";

    axios.get(API_URL_PRODUCTS + "/search/" + e.target.sb.value)
      .then(function (response) {
        console.log(response);
        let datacat = response.data;

        //Clean all
        $table.innerHTML = "";

        //Show product by search bar
        datacat.forEach(el => {
          $template.querySelector(".p_img").src = (el.url_image == "" || el.url_image === null) ? "./img/noimage.png" : el.url_image;
          $template.querySelector(".p_name").textContent = el.name;
          $template.querySelector(".p_price").textContent = el.price;

          $template.querySelector(".p_price").style.textDecoration = (el.discount == 0) ? "" : "line-through"

          $template.querySelector(".p_discount").textContent = el.price - el.discount;

          let $clone = d.importNode($template, true);
          $fragment.appendChild($clone);
        });

        $table.appendChild($fragment);

        //Loader Off
        document.getElementById("loader").style.display = "none";
        document.getElementById("crud-table").style.display = "block";
        document.querySelector("body").style.pointerEvents = "visible";


      })
      .catch(function (error) {
        console.log(error);
        //Clean all
        $table.innerHTML = "";

        if (error.response.status == 404) {
          document.querySelector(".titulofiltro").textContent = error.response.data.message;
          document.querySelector(".titulofiltro").style.marginTop = "30px";
        }
        else if (error.response.status == 500) {
          document.querySelector(".titulofiltro").textContent = error.response.data.message;
          document.querySelector(".titulofiltro").style.marginTop = "30px";
        }

        //Loader Off
        document.getElementById("loader").style.display = "none";
        document.getElementById("crud-table").style.display = "block";
        document.querySelector("body").style.pointerEvents = "visible";
      });

  }
})


// CLICK ON CATEGORIES
/**
 * Filtra los productos en base al nombre de la CATEGORIA seleccionada desde el SIDEBAR LEFT y los muestra en pantalla.
 * @param {string} el valor seleccionado de la CATEGORIA del "SIDEBAR LEFT" es enviado por AXIOS al Backend para el filtrado
 */
d.addEventListener("click", e => {
  if (e.target.matches(".s_name")) {
    console.log(e.target.dataset.id);
    console.log(e.target.dataset.name);

    //Filter title
    document.querySelector(".searchbar").value = "";
    document.querySelector(".titulofiltro").innerHTML = `<u>Filtrado por:</u> ` + e.target.dataset.name;
    document.querySelector(".titulofiltro").style.marginTop = "0px";

    //Loader On
    document.getElementById("loader").style.display = "block";
    document.getElementById("crud-table").style.display = "none";
    document.querySelector("body").style.pointerEvents = "none";

    axios.get(API_URL_PRODUCTS + "/cat/" + e.target.dataset.id)
      .then(function (response) {
        console.log(response.data);
        let datacat = response.data;

        //Clean all
        $table.innerHTML = "";

        //Show product by onclick category
        datacat.forEach(el => {
          $template.querySelector(".p_img").src = (el.url_image == "" || el.url_image === null) ? "./img/noimage.png" : el.url_image;
          $template.querySelector(".p_name").textContent = el.name;
          $template.querySelector(".p_price").textContent = el.price;
          $template.querySelector(".p_price").style.textDecoration = (el.discount == 0) ? "" : "line-through"

          $template.querySelector(".p_discount").textContent = el.price - el.discount;

          let $clone = d.importNode($template, true);
          $fragment.appendChild($clone);
        });

        $table.appendChild($fragment);

        //Loader Off
        document.getElementById("loader").style.display = "none";
        document.getElementById("crud-table").style.display = "block";
        document.querySelector("body").style.pointerEvents = "visible";


      })
      .catch(function (error) {
        console.log(error);
        //Clean all
        $table.innerHTML = "";

        if (error.response.status == 404) {
          document.querySelector(".titulofiltro").textContent = error.response.data.message;
          document.querySelector(".titulofiltro").style.marginTop = "30px";
        }
        else if (error.response.status == 500) {
          document.querySelector(".titulofiltro").textContent = error.response.data.message;
          document.querySelector(".titulofiltro").style.marginTop = "30px";
        }

        //Loader Off
        document.getElementById("loader").style.display = "none";
        document.getElementById("crud-table").style.display = "block";
        document.querySelector("body").style.pointerEvents = "visible";
      });

  }
})


// CLICK ON SELECT-OPTION
/**
 * Filtra los productos en base al nombre de la CATEGORIA seleccionada desde el SELECT-OPTION del navbar y los muestra en pantalla.
 * @param {string} el valor seleccionado de la CATEGORIA del "SELECT-OPTION" es enviado por AXIOS al Backend para el filtrado
 */
$('.crud-select').on('change', function () {
  var value = $(this).val();
  console.log(value);
  
  var txt = $(".crud-select option:selected").text();
  console.log(txt);

  if (txt == "Todos") {

    getAllProduct();

    d.addEventListener("DOMContentLoaded", getAllProduct);
  }
  else {

    //Filter title
    document.querySelector(".searchbar").value = "";
    document.querySelector(".titulofiltro").innerHTML = `<u>Filtrado por:</u> ` + txt;
    document.querySelector(".titulofiltro").style.marginTop = "0px";

    //Loader On
    document.getElementById("loader").style.display = "block";
    document.getElementById("crud-table").style.display = "none";
    document.querySelector("body").style.pointerEvents = "none";

    axios.get(API_URL_PRODUCTS + "/cat/" + value)
      .then(function (response) {
        console.log(response.data);
        let datacat = response.data;

        //Clean all
        $table.innerHTML = "";

        //Show product by onclick category
        datacat.forEach(el => {
          $template.querySelector(".p_img").src = (el.url_image == "" || el.url_image === null) ? "./img/noimage.png" : el.url_image;
          $template.querySelector(".p_name").textContent = el.name;
          $template.querySelector(".p_price").textContent = el.price;
          $template.querySelector(".p_price").style.textDecoration = (el.discount == 0) ? "" : "line-through"

          $template.querySelector(".p_discount").textContent = el.price - el.discount;

          let $clone = d.importNode($template, true);
          $fragment.appendChild($clone);
        });

        $table.appendChild($fragment);

        //Loader Off
        document.getElementById("loader").style.display = "none";
        document.getElementById("crud-table").style.display = "block";
        document.querySelector("body").style.pointerEvents = "visible";

      })
      .catch(function (error) {
        console.log(error);
        //Clean all
        $table.innerHTML = "";

        if (error.response.status == 404) {
          document.querySelector(".titulofiltro").textContent = error.response.data.message;
          document.querySelector(".titulofiltro").style.marginTop = "30px";
        }
        else if (error.response.status == 500) {
          document.querySelector(".titulofiltro").textContent = error.response.data.message;
          document.querySelector(".titulofiltro").style.marginTop = "30px";
        }

        //Loader Off
        document.getElementById("loader").style.display = "none";
        document.getElementById("crud-table").style.display = "block";
        document.querySelector("body").style.pointerEvents = "visible";
      });

  }
});

