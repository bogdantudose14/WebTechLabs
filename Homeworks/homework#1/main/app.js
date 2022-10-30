const distance = (a, b) => {
  //TODO: implementați funcția
  // TODO: implement the function

  let levenshteinDistance = 0;

  if (typeof a !== "string" || typeof b !== "string") {
    throw new Error("InvalidType");
  } else {
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    else {
      const aLimit = a.length + 1;
      const bLimit = b.length + 1;
      const distance = Array(aLimit);
      for (let i = 0; i < aLimit; ++i) {
        distance[i] = Array(bLimit);
      } // creating an array of arrays => matrix like structure

      for (let i = 0; i < aLimit; ++i) {
        distance[i][0] = i;
      }
      for (let j = 0; j < bLimit; ++j) {
        distance[0][j] = j;
      }

      console.log(distance);
      for (let i = 1; i < aLimit; ++i) {
        for (let j = 1; j < bLimit; ++j) {
          const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
          distance[i][j] = Math.min(
            distance[i - 1][j] + 1,
            distance[i][j - 1] + 1,
            distance[i - 1][j - 1] + substitutionCost
          );
        }
      }
      console.log(distance);
      levenshteinDistance = distance[a.length][b.length];
    }
  }

  return levenshteinDistance;
};

module.exports.distance = distance;
