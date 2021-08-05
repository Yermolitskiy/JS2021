class OrCar{
  #subjectType
    constructor(name, Color, prevOdometer) {
      this.name = name;
      this.Color = Color;
      this.prevOdometer = prevOdometer;
      this.#subjectType = "Car";
      }

  static subject = "Car";
  static checkodometer(prevOdometer)
  {
    if(parseInt(prevOdometer)>=2000)
    {return "(Used)";}
    else{return "(New)";}
  }
}
