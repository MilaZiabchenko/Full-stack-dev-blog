import { generateAnimationDelays } from '../helpers/generateAnimationDelays';

const linksData = [
  {
    path: 'articles',
    title: 'Articles',
    nested: false
  },
  {
    path: 'about',
    title: 'About',
    nested: false
  },
  {
    path: 'resume',
    title: 'Resume',
    nested: false
  },
  {
    path: 'resume/web-developer',
    title: 'Web Developer Resume',
    nested: true
  },
  {
    path: 'resume/interpreter',
    title: 'Interpreter Resume',
    nested: true
  }
] as const;

const animationDelays = generateAnimationDelays(linksData.length + 1, 75, 75);

const mobileLinksData = linksData.map(({ path, title, nested }, i) => ({
  path,
  title,
  nested,
  animationDelay: animationDelays[i]
}));

const desktopLinksData = linksData.filter(link => !link.nested);

export type MobileLink = (typeof mobileLinksData)[number];
export { linksData, animationDelays, mobileLinksData, desktopLinksData };
