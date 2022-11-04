// let car = {
//     brand: "Toyota",
//     Variant: "Wigo",
//     Transmission: "Manual",
//     Lights : {
//         Front :"LED",
//         Rear : "LED/Bulb",
//         Signal : "Bulb"
//     },
//     displayBrand(){
//         alert(this.brand);
//         document.writeln(this.Transmission);
//     }
// }

// class myCar {
//     constructor (brand, variant, transmission,){
//         this.brand = brand;
//         this.variant = variant;
//         this.transmission = transmission;
//     }
// }
function vehicle()
        {
            this.vehicletype="vehicletype";
        }
        vehicle.prototype.display=function(){
            return "The brand is: "+ this.vehicletype;

        }
        function MyCar(vehicletype)
        {
            this.vehicletype = vehicletype;
        }

        MyCar.prototype=Object.create(vehicle.prototype);
        var mycar = new MyCar("Honda");