const getErrorMessage = (error: Error | unknown) => {
  if (error instanceof Error) return error.message;

  return String(error);
};

export { getErrorMessage };
