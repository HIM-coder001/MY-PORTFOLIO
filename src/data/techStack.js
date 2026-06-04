import { siteConfig } from './siteConfig.js';

const midpoint = Math.ceil(siteConfig.skills.length / 2);

export const techRowOne = siteConfig.skills.slice(0, midpoint);
export const techRowTwo = siteConfig.skills.slice(midpoint);
