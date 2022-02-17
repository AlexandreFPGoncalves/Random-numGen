export const rem = (px: number): string => `${Math.round((px + Number.EPSILON) * 1000) / 1000 / 16}rem`;
