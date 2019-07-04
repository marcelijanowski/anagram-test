export const isAnagram = (str1: string, str2: string): boolean => {
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};