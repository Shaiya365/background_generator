var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var random = document.querySelector(".random");

function randCol() {
	var c1 = Math.floor(Math.random()*256); //floor zaokrožuje nvazdol, random vrne številko med vključno z 0 in do 1 (brez 1) zato damo 256 (da je ena več kot je rgb številk
	var c2 = Math.floor(Math.random()*256);
	var c3 = Math.floor(Math.random()*256);
	var col = "rgb(" + c1 + "," + c2 + "," + c3 + ")";
	return col;
}

function changeRand() {
	body.style.background = "linear-gradient(to right, " + randCol() + ", " + randCol() +")";
	text();
}

function text() {
	css.textContent = body.style.background + ";";
}
//event input

function change() {
	body.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")";
	text();
}

col1.addEventListener("input", change); //če bi meli change() bi se že na začetku barve spremenile v tisto kar je nastavleno by default, ker gre prvič skozi ko se html zažene in ko pride do te vrstice že pokliče funkcijo

col2.addEventListener("input", change);

//lahko bi tudi v html v input dali atribut onclick ali oninput in bi tam poklicali fukncijo change()

random.addEventListener("click", changeRand);

change();