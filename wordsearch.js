const wordSearch = (letters, word) => {

  if (word === "") {
    return false;
  }

  const transpose = function(matrix) {
    const rows = matrix.length; // 3
    const columns = matrix[0].length; // 2
    let returnArray = [];
    for (let j = 0; j < columns; j++) {
      let tempArray = [];
      for (let i = 0; i < rows; i++) {
        tempArray.push(matrix[i][j]);
      }
      returnArray.push(tempArray);
    }
    return returnArray;
  };
    
  const reversedWord = word.split("").reverse().join('');
      
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
          
    if (l.includes(reversedWord)) return true;
  }
      
  const transposedArray = transpose(letters);
  const verticalJoin = transposedArray.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  
    if (l.includes(reversedWord)) return true;
  }
  
  return false;
};
  
module.exports = wordSearch;