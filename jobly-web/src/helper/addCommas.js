/** addCommas
 * Function that adds commas to a number for readability
 * @param {Number} num --- Number to add commas to
 * @returns {String} --- string of the number with commas
 *
 * Ex: addCommas(-1000.23) => "-1,000.23"
 */

function addCommas(num) {
  // validate that num is a number.
  if (num === undefined) throw new Error("addCommas requires atleast one arg.");
  if (typeof num !== "number") throw new TypeError("num must be a number");

  let [integers, mantissa] = String(num).split(".");

  // Add digit to the front of mantissa (numbers after the decimal)
  mantissa = mantissa ? "." + mantissa : null;

  // count used to keep track of which digit to add commas to
  let count = 0;

  // Split the integer into digits, starting from the last digit add commas
  // after every third digit.
  integers = integers
    .split("")
    .reverse()
    .reduce((acc, curr) => {
      if (curr === "-") return curr + acc;
      if (count === 3) {
        count = 0;
        count++;
        return curr + "," + acc;
      } else {
        count++;
        return curr + acc;
      }
    }, "");

  return mantissa ? integers + mantissa : integers;
}

module.exports = addCommas;
