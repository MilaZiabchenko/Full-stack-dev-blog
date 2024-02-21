const generateAnimationDelays = (
  delaysLength: number,
  initialDelay: number,
  interval: number
) =>
  Array.from({ length: delaysLength }, (_, i) => initialDelay + interval * i);

export { generateAnimationDelays };
