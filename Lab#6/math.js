//export const varA = 1;

const f1 = (a, b) => {
  return a + b;
};

const a = 1;

//export { a, f1 };

// create aliases for export

export { f1 as Sum };
