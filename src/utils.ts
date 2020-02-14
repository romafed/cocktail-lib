export const inArrayStr = (arr: any) => {
  if (arr.length <= 0) return [];
  if (typeof arr[0] === "string") return arr;
  const key = Object.keys(arr[0]);
  return arr.map((item: any) => item[key[0]]);
};

export const filterNull = (obj: any) => {
  const newObj = { ...obj };
  const keyArr: Array<string> = Object.keys(obj);
  for (let key of keyArr) {
    if (newObj[key] === null) delete newObj[key];
  }
  return newObj;
};

export const arrayOfIngredients = (obj: any) => {
  const newObj = { ...obj };
  for (let key of Object.keys(obj)) {
    if (!key.includes("strIngredient")) delete newObj[key];
  }
  return Object.keys(filterNull(newObj)).map(item => newObj[item]);
};

export const firstLetterToLowerCase = (str: string) =>
  str.charAt(0).toLowerCase() + str.slice(1);
