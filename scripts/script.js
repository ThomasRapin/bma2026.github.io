let hr = document.getElementById('hour');
let sd = document.getElementById('second');


/* let now = new Date(); */

/* let now = new Date().toLocaleTimeString('fr-FR',{timeZone: 'America/Chicago'}); */

/* console.log(now); */
/* console.log(now.toLocaleTimeString('fr-FR',{timeZone: "America/Chicago"})); */
/* let select = document.getElementById('TimeZone').options[document.getElementById('TimeZone').selectedIndex]; */


/* let now = new Date().toLocaleTimeString('fr-FR',{timeZone: select.value}); */



 function displayTime(){
//récupération de la date
  /*   let now = new Date(); */
  let select = document.getElementById('TimeZone').options[document.getElementById('TimeZone').selectedIndex];
  let now = new Date().toLocaleTimeString('fr-FR',{timeZone: select.value});

//récupération des heures min et secondes
    let hour = now.split(":")[0];
    let min = now.split(':')[1];
    let second = now.split(':')[2];
/*     let hour = now.getUTCHours()+2;
    let min = now.getMinutes()
    let second = now.getSeconds(); */
//transormation en rotatation
    let hrotation = (15 * hour) + (.25 * min);
    let srotation = 6 * second;

    hr.style.transform = 'rotate('+hrotation+'deg)';
    sd.style.transform = 'rotate('+srotation+'deg)';
}
setInterval(displayTime, 1000);