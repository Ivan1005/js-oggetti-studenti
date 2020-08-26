$(document).ready(function () {
  // CREO L'OGGETTO
  var studente = {
    "nome" : "ivan",
    "cognome" : "franci",
    "eta" : 45,
  };
    // STAMPO A SCHERMO TUTTE LE PROPRIETà
  for ( var k in studente) {
    console.log(studente[k]);
  }

// CREO UN ARRAY DI oggetti
 var studenti = [
   {
     "nome" : "ivan",
     "cognome" : "franci",
     "eta" : 45,
   },
   {
     "nome" : "era",
     "cognome" : "asda",
     "eta" : 34,
   },
   {
     "nome" : "sdad",
     "cognome" : "art",
     "eta" : 22,
   },
 ];
// CICLO TUTTI GLI STUDENTI
 for (var i = 0 ; i < studenti.length ; i++) {
   // PER SCRUPOLO CONTROLLO CHE SIA CICLATO BENE
     console.log(i);
     // STAMPO NOME E COGNOME
     console.log(studenti[i].nome);
     console.log(studenti[i].cognome);
 }
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto


var studenteAggiunto = {
  "nome" : prompt("inserisci il tuo nome"),
  "cognome" :  prompt("inserisci il tuo cognome"),
  "eta" : parseInt(prompt("inserisci la tua età")),
};


// PUSHO NELL ARRAY
studenti.push(studenteAggiunto);
console.log(studenti);
 // PROVO A STAMPARE

 var source = document.getElementById("entry-template").innerHTML;
 var template = Handlebars.compile(source);
 var context = { title: "My New Post", body: "hello"};
 var html = template(context);
 $('#post').append(html);
});
