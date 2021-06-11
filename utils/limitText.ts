export const limitText = (text: string, limit: number) =>
    (text.length <= limit)
    ? text
    : `${text.substring(0, limit-3).trim()}...`;