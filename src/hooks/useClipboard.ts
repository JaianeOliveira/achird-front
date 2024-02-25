export const useClipboard = () => {
  return {
    copy: async (text: string) => {
      await navigator.clipboard.writeText(text);
    },
    paste: async () => {
      return await navigator.clipboard.readText();
    },
  };
};
