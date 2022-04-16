//URL API products
const API_URL_PRODUCTS = 'http://localhost:8080/api/products';
//URL API categories
const API_URL_CATEGORIES = 'http://localhost:8080/api/categories';

//DOM
const d = document,
  $table = d.querySelector(".crud-table"),
  $template = d.getElementById("crud-template").content,
  $form = d.querySelector(".crud-form"),

  $side = d.querySelector(".crud-sidebar"),
  $template2 = d.getElementById("sidebar-template").content,

  $fragment = d.createDocumentFragment();

// GET ALL DATA
const getAll = () => {

  //Loader On
  document.getElementById("loader").style.display = "block";
  document.getElementById("crud-table").style.display = "none";
    
  // AXIOS - Get all data from product table and render in front
  axios.get(API_URL_PRODUCTS)
    .then(function (response) {
      console.log(response.data);
      let data = response.data;

      data.forEach(el => {
        $template.querySelector(".p_img").src = (el.url_image == "" || el.url_image === null) ? "./img/noimage.png" : el.url_image;
        $template.querySelector(".p_name").textContent = el.name;
        $template.querySelector(".p_price").textContent = el.price;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $table.appendChild($fragment);
      
      //Loader Off
      document.getElementById("loader").style.display = "none";
      document.getElementById("crud-table").style.display = "block";

    })
    .catch(function (error) {
      console.log(error);
    });


  // AXIOS - Get all data from category table and render in front
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
    });
}

d.addEventListener("DOMContentLoaded", getAll);

// SUBMIT BTN - SEARCH BAR
d.addEventListener("submit", e => {
  if (e.target === $form) {
    e.preventDefault();
    console.log(e.target.sb.value);
    
    //Filter title
    document.querySelector(".titulofiltro").textContent = "Resultado de Busqueda";
    
    //Loader On
    document.getElementById("loader").style.display = "block";
    document.getElementById("crud-table").style.display = "none";

    axios.get(API_URL_PRODUCTS + "/search/" + e.target.sb.value)
      .then(function (response) {
        console.log(response.data);
        let datacat = response.data;

        //Clean all
        $table.innerHTML = "";

        //Show product by search bar
        datacat.forEach(el => {
          $template.querySelector(".p_img").src = (el.url_image == "" || el.url_image === null) ? "./img/noimage.png" : el.url_image;
          $template.querySelector(".p_name").textContent = el.name;
          $template.querySelector(".p_price").textContent = el.price;

          let $clone = d.importNode($template, true);
          $fragment.appendChild($clone);
        });

        $table.appendChild($fragment);
        
        //Loader Off
        document.getElementById("loader").style.display = "none";
        document.getElementById("crud-table").style.display = "block";


      })
      .catch(function (error) {
        console.log(error);
      });

  }
})

// CLICK ON CATEGORIES
d.addEventListener("click", e => {
  if (e.target.matches(".s_name")) {
    console.log(e.target.dataset.id);
    console.log(e.target.dataset.name);
    
    //Filter title
    document.querySelector(".titulofiltro").innerHTML =  `<u>Filtrado por:</u> ` + e.target.dataset.name;
    
    //Loader On
    document.getElementById("loader").style.display = "block";
    document.getElementById("crud-table").style.display = "none";
    
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

          let $clone = d.importNode($template, true);
          $fragment.appendChild($clone);
        });

        $table.appendChild($fragment);
        
        //Loader Off
        document.getElementById("loader").style.display = "none";
        document.getElementById("crud-table").style.display = "block";


      })
      .catch(function (error) {
        console.log(error);
      });

  }
})