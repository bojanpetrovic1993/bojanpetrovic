// -------------- INPUT SELECTORS and INPUT STORES --------------

const mesto = document.querySelector(".mesto");
let yourPlace = "";
const opstina = document.querySelector(".opstina");
let yourMunicipality = "";
const sluzba = document.querySelector(".sluzba");
let yourCadastreService = "";
const katOpstina = document.querySelector(".kat-opstina");
let yourCadastreMunicipality = "";
const katParcela = document.querySelector(".kat-parcela");
let yourCadastreParcele = "";
const brojPredmeta = document.querySelector(".broj-predmeta");
let yourSubjectNumber = "";
const datumOtvaranja = document.querySelector(".datum-otvaranja");
let yourSubjectDate = "";
const datumIzrade = document.querySelector(".datum-izrade");
let yourWorkDate = "";

const imePrezime = document.querySelector(".ime-prezime");
let yourNameSurname = "";
const prebivaliste = document.querySelector(".prebivaliste");
let yourLivingAddress = "";
const jmbg = document.querySelector(".jmbg-podnosioca");
let yourCitizenNumber = "";

const adresaObjekta = document.querySelector(".adresa-objekta");
let yourObjectAddress = "";

const dugme = document.querySelector("button");

// -------------- PAGE SELECTORS  --------------

let place = document.querySelectorAll(".place");
let municipality = document.querySelectorAll(".mun");
let cadastreService = document.querySelectorAll(".skn");
let cadastreMunicipality = document.querySelectorAll(".cad-mun");
let cadastreParcele = document.querySelectorAll(".cad-par");
let subjectNumber = document.querySelectorAll(".subject-no");
let subjectDate = document.querySelectorAll(".subject-date");
let workDate = document.querySelectorAll(".work-date");

let nameSurname = document.querySelectorAll(".name-surname");
let livingAddress = document.querySelectorAll(".living-address");
let citizenNumber = document.querySelectorAll(".citizen-no");

let objectAddress = document.querySelectorAll(".object-address");

// -------------- CODE --------------
//storing your inputs into variables for every input field

//for general data

mesto.addEventListener("change", function (e) {
  yourPlace = e.target.value;
});

opstina.addEventListener("change", function (e) {
  yourMunicipality = e.target.value;
});

sluzba.addEventListener("change", function (e) {
  yourCadastreService = e.target.value;
});

katOpstina.addEventListener("change", function (e) {
  yourCadastreMunicipality = e.target.value;
});

katParcela.addEventListener("change", function (e) {
  yourCadastreParcele = e.target.value;
});

brojPredmeta.addEventListener("change", function (e) {
  yourSubjectNumber = e.target.value;
});

datumOtvaranja.addEventListener("change", function (e) {
  yourSubjectDate = e.target.value;
});

datumIzrade.addEventListener("change", function (e) {
  yourWorkDate = e.target.value;
});

//for personal data

imePrezime.addEventListener("change", function (e) {
  yourNameSurname = e.target.value;
});

prebivaliste.addEventListener("change", function (e) {
  yourLivingAddress = e.target.value;
});

jmbg.addEventListener("change", function (e) {
  yourCitizenNumber = e.target.value;
});

//for location data

adresaObjekta.addEventListener("change", function (e) {
  yourObjectAddress = e.target.value;
});

//BUTTON
// clicking event calling changes

dugme.addEventListener("click", function () {
  //for general data
  // place.textContent = yourPlace;
  for (let i = 0; i < municipality.length; i++) {
    municipality[i].textContent = yourMunicipality;
    municipality[i].style.color = "black";
  }
  for (let i = 0; i < cadastreService.length; i++) {
    cadastreService[i].textContent = yourCadastreService;
    cadastreService[i].style.color = "black";
  }

  for (let i = 0; i < cadastreMunicipality.length; i++) {
    cadastreMunicipality[i].textContent = yourCadastreMunicipality;
  }

  for (let i = 0; i < cadastreParcele.length; i++) {
    cadastreParcele[i].textContent = yourCadastreParcele;
  }

  for (let i = 0; i < subjectNumber.length; i++) {
    subjectNumber[i].textContent = yourSubjectNumber;
  }

  for (let i = 0; i < subjectDate.length; i++) {
    subjectDate[i].textContent = yourSubjectDate;
  }

  for (let i = 0; i < workDate.length; i++) {
    workDate[i].textContent = yourWorkDate;
  }
  //for personal data
  for (let i = 0; i < nameSurname.length; i++) {
    nameSurname[i].textContent = yourNameSurname;
  }

  for (let i = 0; i < livingAddress.length; i++) {
    livingAddress[i].textContent = yourLivingAddress;
  }

  for (let i = 0; i < citizenNumber.length; i++) {
    citizenNumber[i].textContent = yourCitizenNumber;
  }
  //for location data
  for (let i = 0; i < objectAddress.length; i++) {
    objectAddress[i].textContent = yourObjectAddress;
  }
});

//-----------------------SHOW/HIDE OBJECT SELECTORS--------------------------------

function toggleDiv() {
  let elementSelector2 = document.getElementById("select2").value;
  let elementSelector3 = document.getElementById("select3").value;
  let elementSelector4 = document.getElementById("select4").value;
  let elementSelector5 = document.getElementById("select5").value;
  let elementSelector6 = document.getElementById("select6").value;

  let hiddenElement2 = document.getElementById("hidden-2");
  let hiddenElement3 = document.getElementById("hidden-3");
  let hiddenElement4 = document.getElementById("hidden-4");
  let hiddenElement5 = document.getElementById("hidden-5");
  let hiddenElement6 = document.getElementById("hidden-6");

  let element = document.getElementById("objElement");

  if (elementSelector2 === "show") {
    hiddenElement2.classList.remove("hidden");
  } else {
    hiddenElement2.classList.add("hidden");
  }

  if (elementSelector3 === "show") {
    hiddenElement3.classList.remove("hidden");
  } else {
    hiddenElement3.classList.add("hidden");
  }

  if (elementSelector4 === "show") {
    hiddenElement4.classList.remove("hidden");
  } else {
    hiddenElement4.classList.add("hidden");
  }

  if (elementSelector5 === "show") {
    hiddenElement5.classList.remove("hidden");
  } else {
    hiddenElement5.classList.add("hidden");
  }

  if (elementSelector6 === "show") {
    hiddenElement6.classList.remove("hidden");
  } else {
    hiddenElement6.classList.add("hidden");
  }
  //   if (elementSelector2 === "show") {
  //     hiddenElement2.style.display = "grid";
  //   } else {
  //     hiddenElement2.style.display = "none";
  //   }

  //   if (elementSelector3 === "show") {
  //     hiddenElement3.style.display = "grid";
  //   } else {
  //     hiddenElement3.style.display = "none";
  //   }

  //   if (elementSelector4 === "show") {
  //     hiddenElement4.style.display = "grid";
  //   } else {
  //     hiddenElement4.style.display = "none";
  //   }

  //   if (elementSelector5 === "show") {
  //     hiddenElement5.style.display = "grid";
  //   } else {
  //     hiddenElement5.style.display = "none";
  //   }

  //   if (elementSelector6 === "show") {
  //     hiddenElement6.style.display = "grid";
  //   } else {
  //     hiddenElement6.style.display = "none";
  //   }
}
