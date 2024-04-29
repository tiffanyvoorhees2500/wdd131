myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

//   // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
//   // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);


//   // Write a function using a .forEach method to loop over an array and output it's contents in a <ul>
//   const favfoodElement = document.querySelector("#favorite-foods");
//   function createAndAppendFoodItem(food){
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;

//     favfoodElement.appendChild(favoriteFood);
//   }

//   myInfo.favoriteFoods.forEach(createAndAppendFoodItem);

// Write a function using a .map method to loop over an array and output it's contents in a <ul>
// const favFoodElement = document.querySelector("#favorite-foods");
// function mapFoodItem(food){

//     return `<li>${food}</li>`;
// }

// const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// favFoodElement.innerHTML = foodListElements.join('');

//Using .map() with arrow function
// const favFoodElement = document.querySelector("#favorite-foods");
// const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// // we need to flatten array of strings
// favFoodElement.innerHTML = foodListElements.join("");

// Condense the above into 1 line:
// document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
//   .map((food) => `<li>${food}</li>`)
//   .join("");


// ACTIVITY 3:
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
// 1. Create a function that will take a food string and return that string embedded in some html. (<li>food</li>)
function createFoodListItemString(food){
    return `<li>${food}</li>`;
}

// 2. Create a function that will take a place string and return that string embedded in some html. The place is a bit more complex. We have the location and the length. You can use the following for the template: <dt>${place.place}</dt><dd>${place.length}</dd>)
function createPlaceListItemString(place){
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

// 3. Create a function that will take a list, and a callback function to produce an HTML template. The function should transform our list by looping over it calling the template function once for each item in the list. The function should return all of the HTML strings flattened into one long string.
function generateListMarkup(list, templateCallback){
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    createFoodListItemString
);

placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    createPlaceListItemString
);