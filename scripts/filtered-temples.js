/* ------------------------------------------------ */
/* CONSTANTS */
/* ------------------------------------------------ */
//Hamburger Button and Navigation Menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const menuitems = document.querySelectorAll(".navigation li");

//Temple Grid and navigation Links
const templeGrid = document.getElementById("temple-grid");
const homeLink = document.getElementById("home-link");
const oldLink = document.getElementById("old-link");
const newLink = document.getElementById("new-link");
const largeLink = document.getElementById("large-link");
const smallLink = document.getElementById("small-link");


/* ------------------------------------------------ */
/* EVENT LISTENERS */
/* ------------------------------------------------ */
hamButton.addEventListener("click",() => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
menuitems.forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active");
        if(element.firstChild.textContent == "Home"){
          document.getElementById("page-title").textContent = "All Temples";
        }else{
          document.getElementById("page-title").textContent = element.firstChild.textContent + " Temples";
        }
    });
});
homeLink.addEventListener("click",() => {
    createTempleGrid(temples);
});
oldLink.addEventListener("click", () => {
    createTempleGrid(temples.filter(temple => parseInt(temple.dedicated.substring(0,4)) < 1900));
});
newLink.addEventListener("click", () => {
    createTempleGrid(temples.filter(temple => parseInt(temple.dedicated.substring(0,4)) > 2000));
});
largeLink.addEventListener("click", () => {
    createTempleGrid(temples.filter(temple => temple.area > 90000));
});
smallLink.addEventListener("click", () => {
    createTempleGrid(temples.filter(temple => temple.area < 10000));
});

/* ------------------------------------------------ */
/* DATA ARRAYS */
/* ------------------------------------------------ */
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Gilbert Arizona",
      location: "Gilbert, Arizona",
      dedicated: "2014, March, 9",
      area: 85000,
      imageUrl:
      "images/gilbert-arizona-temple.webp"
    },
    {
      templeName: "Mesa Arizona",
      location: "Mesa, Arizona",
      dedicated: "1927, October, 23",
      area: 113916,
      imageUrl:
      "images/mesa_arizona_temple.webp"
    },
    {
      templeName: "Mount Timpanogos",
      location: "American Fork, Utah",
      dedicated: "1996, October, 13",
      area: 107240,
      imageUrl:
      "images/mount-timpanogos-temple.webp"
    },
    // Add more temple objects here...
];

/* ------------------------------------------------ */
/* JUST RUN ME NOW */
/* ------------------------------------------------ */
createTempleGrid(temples);

/* ------------------------------------------------ */
/* FUNCTIONS */
/* ------------------------------------------------ */

// Toggle active class for navigation bar
function toggleActive(element){
    element.classList.toggle("active");
}

// Create the temple Grid passing in temples data array filtered if needed
function createTempleGrid(filteredTemples){
    // Clear any existing html from temple Grid
    templeGrid.innerHTML = "";

    filteredTemples.forEach(element => {
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let figcaption = document.createElement("figcaption");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");

        name.textContent = element.templeName;
        name.classList.add("temple-name");

        location.innerHTML = `<span class="item-title">Location: </span><span class="item-content">${element.location}</span>`;
        
        dedication.innerHTML = `<br><span class="item-title">Dedicated: </span><span class="item-content">${element.dedicated}</span>`;
        
        area.innerHTML = `<br><span class="item-title">Size: </span><span class="item-content">${element.area} sq ft</span>`;

        img.setAttribute("src", element.imageUrl);
        img.setAttribute("alt", element.templeName);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "250");
        img.setAttribute("height", "167");

        figcaption.appendChild(location);
        figcaption.appendChild(dedication);
        figcaption.appendChild(area);

        figure.appendChild(name);
        figure.appendChild(img);
        figure.appendChild(figcaption);

        templeGrid.appendChild(figure);
    });
}  

  