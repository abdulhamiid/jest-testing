// convert first letter of a string to uppercase
function capitalizeStr(str) {
  return str[0].toUpperCase() + str.split('').splice(1).join('');
}

module.exports = capitalizeStr;