function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDate = londonElement.querySelector("#london-date");
    let londonTime = londonElement.querySelector("#london-time");
    londonDate.innerHTML = moment().tz("Europe/London").format("D MMMM YYYY");
    londonTime.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss [<small>]A[<small>]");
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector("#paris-date");
    let parisTimeElement = parisElement.querySelector("#paris-time");
    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("D MMMM YYYY");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]A[<small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("D MMMM YYYY");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[<small>]");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city-info">
  <div class="city-date">
    <h2>${cityName}</h2>
    <div class="date" id="london-date">${cityDate}</div>
  </div>
  <div class="time" id="london-time">${cityTime}</div>
  </div>
  <a href="index.html">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
