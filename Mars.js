class Vehicle {
    type;
    name;
    crew;


    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.crew = [];
    }
    canGo() {
        if (this.crew !== []) {
            return false
        } else {
            return true
        }

    }
}

class Employee {
    name;
    title;
    currentVehicle;

    constructor(name, title, currentVehicle) {
        this.name = name
        this.title = title
        this.currentVehicle = currentVehicle
    }

    assign(Vehicle) {
        if ((Vehicle.type === "Plane") && (this.title === "Pilot") || (Vehicle.type === "Bus") && (this.title === "Driver") || (Vehicle.type === "Boat") && (this.title === "Captain") || (Vehicle.type === "Train") && (this.title === "Crew") ){
            if (Vehicle.crew.length === 0) {
            // if ((Vehicle.type === "Plane") && (this.title === "Pilot")) {
                this.currentVehicle = Vehicle.name;
                Vehicle.crew.push(this);

                return true
            }  else {
                return false
            }
        }else {
                return false
            }
        

    }
}

let v1 = new Vehicle("Plane", "Berdie");
let v2 = new Vehicle("Plane", "Ernie");
let v3 = new Vehicle("Bus", "Big Blue");
let v4 = new Vehicle("Boat", "Sinkalot");
let v5 = new Vehicle("Train", "Thomas");

let e1 = new Employee("John", "Crew")
let e2 = new Employee("James", "Pilot")
let e3 = new Employee("Jack", "Pilot")
let e4 = new Employee("Jessie", "Driver")
let e5 = new Employee("Jason", "Captain")
let e6 = new Employee("Jackie", "Crew")


console.log(v1.canGo())
console.log(e2.assign(v1))
console.log(v1)

console.log(e3.assign(v1))

console.log(e4.assign(v2))

console.log(e6.assign(v5))
console.log(v5)



