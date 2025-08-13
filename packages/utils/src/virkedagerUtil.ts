export const finnDager = (trekkdager: number): string => {
  return trekkdager ? parseFloat((trekkdager % 5).toFixed(1)).toString() : '0';
};

export const finnUker = (trekkdager: number): string => {
  return trekkdager ? Math.floor(trekkdager / 5).toString() : '0';
};
