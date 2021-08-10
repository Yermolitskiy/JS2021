// model view controller
// one of the most popula patterns on the web.
// model is the data and the rules applying to that data

function add(a, b) {
  console.log(a+b);
}
// add(2,3);
// console.log(process.argv.slice(2));
const args = process.argv.slice(2).map(
    function (value, index, fullArray) {
        return Number(value);
    }
)

console.log(add(args[0], args[1]));

require("./output.js");
