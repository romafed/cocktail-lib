export const inArrayStr = (arr: Array<any>) => {
  if (arr.length <= 0) return [];
  const key = Object.keys(arr[0]);
  return arr.map(item => item[key[0]]);
};
