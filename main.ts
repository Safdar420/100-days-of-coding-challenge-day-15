//  Q no 43

function make_Great(magicians : string []) : string [] {
    return magicians.map(magician => `${magician} the Great`)
}

function showMagicians(magicians : string[]) : void {
    console.log("Magicians :");
    for (let magician of magicians){
        console.log(magician);
    }
}

const Magician_Names: string[] = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];

const Great_magicians : string[] = make_Great([...Magician_Names]);

showMagicians(Magician_Names);
console.log("\n");
showMagicians(Great_magicians);

//  Q no 44

function makeSandwich (...items : string []) : void {
    console.log("Sandwiches summary");
    console.log("Bread");

    for (let item of items){
        console.log(item);
    }
    console.log("Bread");
    console.log();
}

makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Ham", "Mustard");
makeSandwich("Turkey", "Bacon", "Avocado", "Mayonnaise");

//  Q no 45

interface Car {
    manufacturer : string;
    model : string ;
    [key : string ] : any 
    }
    
    function createCar(manufacturer : string , model : string , ...Options : any[]) : Car {
        const car : Car = {
        manufacturer,
        model,
        }
    
    
    for (let i = 0; i < Options.length; i +=2){
    
        const key = Options[i];
        const value = Options[i + 1];
    
        car[key] = value;
        }
    return car;
    }
    
    const myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'year', '2022');
    
    console.log(myCar);