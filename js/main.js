/*
Fetch API

- Return A Respresentaion of the Entire HTTP Respose
*/

// documentation  4 7timer // http://www.7timer.info/doc.php?lang=en#acknowledgement_and_disclaimer



// City Select 
cityName = document.getElementById("citySelected");
city = cityName.value;
console.log(city); 
console.log(city.length); 


let weather = document.getElementById("weather");



///// weather div display
if (city.length  == 0) {
    weather.style.display = "none";
} else {
    weather.style.display = "flex"; 
    // document.body.innerHTML += '<div style="position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;">"Getting forecast ..."</div>';
}


// refresh page on change
cityName.onchange = function(){location.reload()};


let latRe = /lat":"-*\d*\d*\d.\d\d/g;
let lonRe = /lon":"-*\d*\d*\d.\d\d/g;
let finalRe = /-*\d*\d*\d.\d\d/g;



// console.log(contents.match(lonRe)); // Array [ 'lon":"31.23' ]
console.log(city.match(lonRe)[0].match(finalRe)[0]); // 31.23
console.log(city.match(latRe)[0].match(finalRe)[0]); // 30.03

let lat = city.match(latRe)[0].match(finalRe)[0];
let lon = city.match(lonRe)[0].match(finalRe)[0];

// display weather cards

console.log(`lat => ${lat} - lon => ${lon}`)


//////////////////////////////// to get weather from 7timer.info

// fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civil&output=json").then((result) => {
fetch(`http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`).then((result) => {
    console.log(result); // Response > 200
    console.log(result.status); // 200

    let myData = result.json();
    
    console.log(myData); // promise >  fullfilled
    return myData
})
.then(data => {

    // for (let i = 0; i < 65 ; i++) {
    for (let i = 0; i < 65 ; i += 8) {
        console.log(data.dataseries[i]);

        console.log(`||||||||||||||||||||${[i+1]}`)
    }

    //// for cards temp
    // card 1
    let day1t = document.getElementById("day1t").innerHTML = data.dataseries[0].temp2m + '&#8451';
    let c = data.dataseries[0].temp2m;
    let f= (((9/5)*c) + 32).toFixed(1);
    let day1tf = document.getElementById("day1tf").innerHTML = f + '&#8457';
    let day1tw = document.getElementById("day1tw").innerHTML = data.dataseries[0].weather;
    // let day1i = document.getElementById("day1i").src = img.src = `images/${data.dataseries[0].weather}.png`;
    let day1i = document.getElementById("day1i").src = `images/${data.dataseries[0].weather}.png`;

    // card 2
    let day2t = document.getElementById("day2t").innerHTML = data.dataseries[8].temp2m + '&#8451';
    let c2 = data.dataseries[8].temp2m;
    let f2= (((9/5)*c2) + 32).toFixed(1);
    let day2tf = document.getElementById("day2tf").innerHTML = f2 + '&#8457';
    let day2tw = document.getElementById("day2tw").innerHTML = data.dataseries[8].weather;
    let day2i = document.getElementById("day2i").src = `images/${data.dataseries[8].weather}.png`;

    // card 3
    let day3t = document.getElementById("day3t").innerHTML = data.dataseries[16].temp2m + '&#8451';
    let c3 = data.dataseries[16].temp2m;
    let f3= (((9/5)*c3) + 32).toFixed(1);
    let day3tf = document.getElementById("day3tf").innerHTML = f3 + '&#8457';
    let day3tw = document.getElementById("day3tw").innerHTML = data.dataseries[16].weather;
    let day3i = document.getElementById("day3i").src = `images/${data.dataseries[16].weather}.png`;

    // card 4
    let day4t = document.getElementById("day4t").innerHTML = data.dataseries[24].temp2m + '&#8451';
    let c4 = data.dataseries[24].temp2m;
    let f4= (((9/5)*c4) + 32).toFixed(1);
    let day4tf = document.getElementById("day4tf").innerHTML = f4 + '&#8457';
    let day4tw = document.getElementById("day4tw").innerHTML = data.dataseries[24].weather;
    let day4i = document.getElementById("day4i").src = `images/${data.dataseries[24].weather}.png`;

    // card 5
    let day5t = document.getElementById("day5t").innerHTML = data.dataseries[32].temp2m + '&#8451';
    let c5 = data.dataseries[32].temp2m;
    let f5= (((9/5)*c5) + 32).toFixed(1);
    let day5tf = document.getElementById("day5tf").innerHTML = f5 + '&#8457';
    let day5tw = document.getElementById("day5tw").innerHTML = data.dataseries[32].weather;
    let day5i = document.getElementById("day5i").src = `images/${data.dataseries[32].weather}.png`;

    // card 6
    let day6t = document.getElementById("day6t").innerHTML = data.dataseries[40].temp2m + '&#8451';
    let c6 = data.dataseries[40].temp2m;
    let f6= (((9/5)*c6) + 32).toFixed(1);
    let day6tf = document.getElementById("day6tf").innerHTML = f6 + '&#8457';
    let day6tw = document.getElementById("day6tw").innerHTML = data.dataseries[40].weather;
    let day6i = document.getElementById("day6i").src = `images/${data.dataseries[40].weather}.png`;

    // card 7
    let day7t = document.getElementById("day7t").innerHTML = data.dataseries[48].temp2m + '&#8451';
    let c7 = data.dataseries[48].temp2m;
    let f7= (((9/5)*c7) + 32).toFixed(1);
    let day7tf = document.getElementById("day7tf").innerHTML = f7 + '&#8457';
    let day7tw = document.getElementById("day7tw").innerHTML = data.dataseries[48].weather;
    let day7i = document.getElementById("day7i").src = `images/${data.dataseries[48].weather}.png`;

})
.catch(error => {
    console.log(error);
    // weather.style.display = "none";
});




// For cards date
let t1 = new Date(); t1. setDate(t1. getDate() + 0);
let t2 = new Date(); t2. setDate(t2. getDate() + 1);
let t3 = new Date(); t3. setDate(t3. getDate() + 2);
let t4 = new Date(); t4. setDate(t4. getDate() + 3);
let t5 = new Date(); t5. setDate(t5. getDate() + 4);
let t6 = new Date(); t6. setDate(t6. getDate() + 5);
let t7 = new Date(); t7. setDate(t7. getDate() + 6);
let day1 = document.getElementById("day1").innerHTML = t1.toDateString();
let day2 = document.getElementById("day2").innerHTML = t2.toDateString();
let day3 = document.getElementById("day3").innerHTML = t3.toDateString();
let day4 = document.getElementById("day4").innerHTML = t4.toDateString();
let day5 = document.getElementById("day5").innerHTML = t5.toDateString();
let day6 = document.getElementById("day6").innerHTML = t6.toDateString();
let day7 = document.getElementById("day7").innerHTML = t7.toDateString();

