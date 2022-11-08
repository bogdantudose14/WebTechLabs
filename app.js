function addTokens(input, tokens) {
  // #region "input" parameter validity
  if (typeof input !== 'string') {
    throw new Error('Input should be a string');
  }
  if (input.length < 6) {
    throw new Error('Input should have at least 6 characters');
  }

  // #endregion

  // #region Check "tokens" parameter validity

  let isTokensParameterValid;

  if (Array.isArray(tokens)) {
    for (const token of tokens) {
      if (token.hasOwnProperty('tokenName') && Object.keys(token).length == 1) {
        isTokensParameterValid =
          typeof token['tokenName'] === 'string' ? true : false; // conditional operator for assignment after evaluating the condition
      } else {
        isTokensParameterValid = false;
      }
    }
  } else {
    // tokens is not an array
    isTokensParameterValid = false;
  }

  if (!isTokensParameterValid) {
    throw new Error('Invalid array format');
  }

  // #endregion

  // #region "input" content validity

  // #endregion
}

const app = {
  addTokens: addTokens,
};

module.exports = app;
