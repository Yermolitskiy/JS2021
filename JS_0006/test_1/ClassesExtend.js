class Car extends OrCar {
    constructor(name, Color, prevOdometer, odomtr)
        {
            super(name, Color, prevOdometer);
            this.odometer = odomtr;
        }

        get isNew()//isSenior()
        {
            var by = this.odometer//super.prevOdometer //birthYear;
            if(parseInt(by)>2000)
                {
                    return "(Used)";
                }
            else{return "(New)"}
        }
  }
