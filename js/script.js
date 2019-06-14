var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var places = /** @class */ (function () {
    function places(place, city, zip, address, teaserimage) {
        this.place = "";
        this.city = "";
        this.zip = "";
        this.address = "";
        this.teaserimage = "";
        this.place = place;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.teaserimage = teaserimage;
    }
    places.prototype.display = function () {
        return "\n\t\t<div class=\"col-lg-3\">\n\t\t  <div class=\"font-weight-bold\">" + this.place + " </div>\n\t\t  <div>" + this.zip + " " + this.city + ", " + this.address + "</div>\n\t\t  <div><img src=\"" + this.teaserimage + "\" height=50% width=100%></div>\n\t\t</div>\n\t\t</div>\n\t\t";
    };
    return places;
}());
var karlsplatz = new places("Karlsplatz", "Vienna", "1040", "Kreuzherrengasse 1", "img/karlsplatz.jpg");
var schoenbrunn = new places("Schloss Schönbrunn", "Vienna", "1130", "Schönbrunner Schloßstraße 47", "img/schoenbrunn.jpg");
var belvedere = new places("Schloss Belvedere", "Vienna", "1030", "Prinz Eugen-Straße 27", "img/belvedere.jpg");
var prater = new places("Prater", "Vienna", "1020", "Riesenradplatz 1", "img/prater.jpg");
var arrayplaces = [karlsplatz, schoenbrunn, belvedere, prater];
// console.log(arrayplaces);
// console.log(karlsplatz.display());
// document.getElementById("main").innerHTML = schoenbrunn.display();
// for (let i = 0; i < arrayplaces.length; i++) {
//    console.log(arrayplaces[i].display());
//    document.getElementById("main").innerHTML = arrayplaces[i];
// };
arrayplaces.forEach(function (value) {
    console.log(value.display());
    document.getElementById("main").innerHTML += value.display();
    // body...
});
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(place, city, zip, address, teaserimage, telephone, type, web) {
        var _this = _super.call(this, place, city, zip, address, teaserimage) || this;
        _this.telephone = "";
        _this.type = "";
        _this.web = "";
        _this.telephone = telephone;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    restaurants.prototype.display = function () {
        return "\n\t" + _super.prototype.display.call(this) + "\n\t<div>" + this.telephone + "</div>\n\t<div>" + this.type + "</div>\n\t<div>" + this.web + "</div>\n\t";
    };
    return restaurants;
}(places));
var burgerista = new restaurants("Karlsplatz", "Vienna", "1040", "Kreuzherrengasse 1", "img/karlsplatz.jpg", "+43567", "American", "www.burgerista.at");
var vapiano = new restaurants("Schloss Schönbrunn", "Vienna", "1130", "Schönbrunner Schloßstraße 47", "img/schoenbrunn.jpg", "12345", "Italian", "www.vapiano.at");
var arrayrestaurants = [burgerista, vapiano];
arrayplaces.forEach(function (value) {
    console.log(value.display());
    document.getElementById("main").innerHTML += value.display();
    // body...
});
