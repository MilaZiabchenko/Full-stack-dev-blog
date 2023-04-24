const getObjectProperty = <T, K extends keyof T>(object: T, key: K) =>
  object[key];

export { getObjectProperty };
