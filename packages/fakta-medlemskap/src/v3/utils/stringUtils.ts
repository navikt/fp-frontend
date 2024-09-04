export const toTitleCapitalization = (sentence: string): string => {
  return sentence
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' ');
};
