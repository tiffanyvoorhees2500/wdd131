// Arrays/Data
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

// constants
const product_select = document.querySelector("#product_id");
let numVisits = Number(window.localStorage.getItem("number-vistis")) || 0;
numVisits++;

//function to add Product Options to the select element
addProductOptions();

function addProductOptions(){
    products.forEach(product => {
        let option = document.createElement("option");
        option.textContent = product.name;
        option.value = product.id;
        
        product_select.appendChild(option);
    });
}


