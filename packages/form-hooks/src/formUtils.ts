const getError = (errors: { [x: string]: any; }, name: string) => {
  const error = name.split('.').reduce((o, i) => (o !== undefined ? o[i] : o), errors);
  return error && error.message;
};

export default getError;
