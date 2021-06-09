export const limitText = (text: string | undefined, limit: number) =>
    (text === undefined)
    ? ""
    : (text.length <= limit)
    ? text
    : `${text.substring(0, limit-3).trim()}...`;