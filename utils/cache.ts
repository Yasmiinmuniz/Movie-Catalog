export const getCachedData = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) as T : null;
};

export const setCachedData = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};
