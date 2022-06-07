// find string length
function stringLength(str) {
  let count = str.length;
  if(count > 0 && count <= 10 ){
    return str.length;
  }
  return 'Error!'
}

module.exports = stringLength;