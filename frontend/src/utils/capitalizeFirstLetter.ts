const capitalizeFirstLetter = (input: string | unknown) => {
  if (typeof input === 'string') {
    if (input.charAt(0) === input.charAt(0).toUpperCase()) {
      return input;
    }

    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  return;
};

export { capitalizeFirstLetter };
