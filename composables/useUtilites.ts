export const useUtilites = () => {
  const toTitleCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return {
    toTitleCase,
  };
};
