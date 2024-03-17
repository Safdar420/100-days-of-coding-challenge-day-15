//  Q no 43
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_Great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
function showMagicians(magicians) {
    console.log("Magicians :");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var Magician_Names = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];
var Great_magicians = make_Great(__spreadArray([], Magician_Names, true));
showMagicians(Magician_Names);
console.log("\n");
showMagicians(Great_magicians);
//  Q no 44
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwiches summary");
    console.log("Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log("Bread");
    console.log();
}
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Ham", "Mustard");
makeSandwich("Turkey", "Bacon", "Avocado", "Mayonnaise");
function createCar(manufacturer, model) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var i = 0; i < Options.length; i += 2) {
        var key = Options[i];
        var value = Options[i + 1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'year', '2022');
console.log(myCar);
