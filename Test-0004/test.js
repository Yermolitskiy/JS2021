
function Geeks() {
var k = "The respective values are :";

    var input = document.getElementsByName('array[]');

    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        k = k + "array[" + i + "].value= "
                           + a.value + " ";
    }

    document.getElementById("par").innerHTML = k;
    document.getElementById("po").innerHTML = "Output";
}

function display() {
alert("Hello World!");
}
function carz()
{
    const cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo").innerHTML = cars;
}

var aza = [];
var correctAnswers = [4,7,9,11,10,8,6,-1,4,9,32,36,6,0,10]

function arrayOfAnswers()
{
    var k = "The value is: ";
    var boxitems = document.getElementsByName('array[]');
    for (var i=0; i < boxitems.length; i++) {
      var a = boxitems[i];
      k= a.value
      aza.push(k)
    }

    document.getElementById("arrayz").innerHTML = aza;
    // return false
}

function checkAnswers()
{
    var one = aza;
    var two = correctAnswers;
    correctAnswers.forEach((num1, index) => {
        const num2 = aza[index];
        console.log(num1, num2);

    });
}
function answerCount()
{
    var nam = document.getElementById("name").value;
    var surnam = document.getElementById("surname").value;
    var count = 0;
    for(var i=0; i<aza.length; i++){
        if (aza[i] == correctAnswers[i])
            count ++;
   }
   var percent = Math.round(count/aza.length*100);
   document.getElementById("ac").innerHTML = percent;
   document.getElementById("nam").innerHTML = nam;
   document.getElementById("surnam").innerHTML = surnam;

}
function post() {
  var nam = document.getElementById("name").value;
  var surnam = document.getElementById("surname").value;
  var count = 0;
  for(var i=0; i<aza.length; i++){
      if (aza[i] == correctAnswers[i])
          count ++;
  }
  var percent = Math.round(count/aza.length*100);
  var postData = {
    Name: nam,
    Surname: surnam,
    result: percent

    };

    $.ajax({
             url: 'addResult.php',
             data: {name: nam, surname: surnam, percent: percent},
             type: 'GET',
             success: function(res){
                 alert('Data is in');
             },
             error: function(){
                 alert('Error, try one more time!');
             }
         });


}
