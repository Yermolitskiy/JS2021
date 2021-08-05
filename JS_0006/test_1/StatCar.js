
class StatCar {
  static name = "Tesla";
  static Color = "Model S";
  static prevOdometer = 125;
  static odomtr = 1113;

    constructor(name, Color, prevOdometer, odomtr)
        {
            this.name = StatCar.name;
            this.Color = StatCar.Color;
            this.prevOdometer = StatCar.prevOdometer;
            this.odometer = StatCar.odomtr;
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
// dublicate code odomtreally it has to be on the separate class, that counts isNew for us.
