const getErrorMessage = (err: Error | unknown) => {
  let errorMessage;

  err instanceof Error
    ? (errorMessage = err.message)
    : (errorMessage = String(err));

  console.error(`Error: ${errorMessage}`);

  return errorMessage;
};

export { getErrorMessage };
