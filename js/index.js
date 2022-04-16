//URL API products
const API_URL_PRODUCTS = 'http://localhost:8080/api/products';
//URL API categories
const API_URL_CATEGORIES = 'http://localhost:8080/api/categories';

//DOM
const d = document,
$table = d.querySelector(".crud-table"),
$template = d.getElementById("crud-template").content,

$side = d.querySelector(".crud-sidebar"),
$template2 = d.getElementById("sidebar-template").content,

$fragment = d.createDocumentFragment();

// AXIOS - Get all data from product table and render in front
axios.get(API_URL_PRODUCTS)
  .then(function (response) {
    console.log(response.data);
    let data = response.data;
    
    data.forEach(el => {
      $template.querySelector(".p_img").src = (el.url_image=="" || el.url_image===null) ? "./img/noimage.png" : el.url_image;
      $template.querySelector(".p_name").textContent = el.name;
      $template.querySelector(".p_price").textContent = el.price;
      
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    
    $table.appendChild($fragment);
    
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
    $template2.querySelector(".s_li").dataset.id = el.id;
    $template2.querySelector(".s_li").dataset.name = el.name;
    
    let $clone2 = d.importNode($template2, true);
    $fragment.appendChild($clone2);
  });
  
  $side.appendChild($fragment);
  
})
.catch(function (error) {
  console.log(error);
});