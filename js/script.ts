class places {
	place="";
	city="";
	zip="";
	address="";
	teaserimage="";
	constructor(place,city,zip,address,teaserimage) {
		this.place=place;
		this.city=city;
		this.zip=zip;
		this.address=address;
		this.teaserimage=teaserimage
	}
	display(){
		return `
		<div class="col-lg-3">
		  <div class="font-weight-bold">${this.place} </div>
		  <div>${this.zip} ${this.city}, ${this.address}</div>
		  <div><img src="${this.teaserimage}" height=50% width=100%></div>
		</div>
		</div>
		`
	}
}

let karlsplatz = new places("Karlsplatz","Vienna", "1040", "Kreuzherrengasse 1", "img/karlsplatz.jpg")
let schoenbrunn = new places("Schloss Schönbrunn","Vienna", "1130", "Schönbrunner Schloßstraße 47", "img/schoenbrunn.jpg")
let belvedere = new places("Schloss Belvedere","Vienna", "1030", "Prinz Eugen-Straße 27", "img/belvedere.jpg")
let prater = new places("Prater","Vienna", "1020", "Riesenradplatz 1", "img/prater.jpg")

let arrayplaces: Array<any> =[karlsplatz, schoenbrunn, belvedere, prater];

// console.log(arrayplaces);
// console.log(karlsplatz.display());
// document.getElementById("main").innerHTML = schoenbrunn.display();


// for (let i = 0; i < arrayplaces.length; i++) {
//    console.log(arrayplaces[i].display());
//    document.getElementById("main").innerHTML = arrayplaces[i];

// };

arrayplaces.forEach(function(value){
	console.log(value.display());
	document.getElementById("main").innerHTML += value.display();
	// body...
});

class restaurants extends places {
	telephone="";
	type="";
	web="";

	constructor(place,city,zip,address,teaserimage,telephone,type,web){
	super(place,city,zip,address,teaserimage);
	this.telephone=telephone;
	this.type=type;
	this.web=web;
} 
display(){
	return`
	${super.display()}
	<div>${this.telephone}</div>
	<div>${this.type}</div>
	<div>${this.web}</div>
	`
}
}

let burgerista = new restaurants("Karlsplatz","Vienna", "1040", "Kreuzherrengasse 1", "img/karlsplatz.jpg", "+43567", "American","www.burgerista.at")
let vapiano = new restaurants("Schloss Schönbrunn","Vienna", "1130", "Schönbrunner Schloßstraße 47", "img/schoenbrunn.jpg","12345", "Italian", "www.vapiano.at")

let arrayrestaurants: Array<any> =[burgerista,vapiano];

arrayplaces.forEach(function(value){
	console.log(value.display());
	document.getElementById("main").innerHTML += value.display();
	// body...
});