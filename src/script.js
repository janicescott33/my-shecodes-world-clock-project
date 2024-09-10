function updateTime() {
  let londonDate = document.querySelector("#london-date");
  let londonTime = document.querySelector("#london-time");
  londonDate.innerHTML = moment().tz("Europe/London").format("D MMMM YYYY");
  londonTime.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[<small>]");

  let parisDate = document.querySelector("#paris-date");
  let parisTime = document.querySelector("#paris-time");
  parisDate.innerHTML = moment().tz("Europe/Paris").format("D MMMM YYYY");
  parisTime.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[<small>]");
}

updateTime();
setInterval(updateTime, 1000);
