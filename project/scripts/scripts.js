const today = new Date();

const currentyear_element = document.querySelector("#currentyear");
currentyear_element.innerHTML = ` ${today.getFullYear()}`;

const lastModified_element = document.querySelector("#lastModified");
lastModified_element.innerHTML = "Last Modification: " + document.lastModified;



