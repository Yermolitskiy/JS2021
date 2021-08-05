const p1 = new OrCar();
let p2,p3,p4;
function LoadCars()
{
    p1.name="BMW";
    p1.Color = "Red";
    p1.prevOdometer=26;
    p2 = new OrCar("Audi", "Brown", 2500);
    p3 = new Car("Mercedes", "Black", 1000, 76548);
    p4 = new StatCar();
    document.getElementById("idSubject").innerHTML=OrCar.subject;
    document.getElementById("odometer").hidden=true;
}
function CarCheck(pic)
{
    document.getElementById("odometer").hidden=true;
    switch(pic.id)
    {
        case "car1":
            {
                LoadCar(p1);
                break;
            }

        case "car2":
            {
                LoadCar(p2);
                break;
            }
        case "car3":
            {
                LoadCar(p3);
                document.getElementById("odometer").hidden=false;
                document.getElementById("om").innerHTML=p3.odometer +p3.isNew;
                break;
            }
        case "car4":
            {
                LoadCar(p4);
                document.getElementById("odometer").hidden=false;
                document.getElementById("om").innerHTML=p4.odometer +p4.isNew;
                break;
            }
        default:
            {
                LoadCar();
                break;
            }
    }
}
function LoadCar(p)
{
    document.getElementById("pName").innerHTML=p.name;
    document.getElementById("pColor").innerHTML=p.Color;
    document.getElementById("pOdo").innerHTML=p.prevOdometer+OrCar.checkodometer(p.odometer);
}
