//Get the values from our web page needed to calculate windchill
const temp = document.getElementById("temperature").innerText;
const tempUnit = document.getElementById("temp-unit").innerText;
const wind = document.getElementById("wind").innerText;
const windUnit = document.getElementById("wind-unit").innerText;

//Get the element to place result
const windChillElement = document.getElementById("wind-chill");


let windChill = 0;
if(temp <= 50 && tempUnit == "℉" && wind > 3 && windUnit == "mph"){
    windChill = calculateWindChill(temp,wind);
}else if(temp <= 10 && tempUnit == "℃" && wind > 4.8 && windUnit == "km/h"){
    const fahrenheit = convertToFahrenheit(temp);
    windChill = calculateWindChill(fahrenheit, wind);
}

if(windChill == 0){
    windChillElement.innerText = "NA";
}else{
    windChillElement.innerText = windChill;
}

function calculateWindChill(temperature, windchill){
    // formula: 35.74 + 0.6215T – 35.75(V0.16) + 0.4275T(V0.16)
    // T = temperature
    // V = Windspeed
    return Math.round(35.74 + 0.6215 * temperature - 35.75 * windchill ** 0.16 + 0.4275 * temperature * windchill ** 0.16);
}

function convertToFahrenheit(celcius){
    return (celcius * 9/5) + 32;
}