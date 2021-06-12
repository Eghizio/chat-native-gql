// could use some lib for that

const DAY_IN_MS = 86400000; // 24*60*60*1000
const HOUR_IN_MS = 3600000; // 60*60*1000
const MIN_IN_MS = 60000; // 60*1000
const SEC_IN_MS = 1000;

export const parseMessageTime = (msgTime: Date) => {
    const timeDiff = Date.now() - msgTime.getTime();
    
    if(isNaN(timeDiff)) return ""; // fix for Expo GiftedChat date bug
    if(timeDiff < 0) return "from the future"; // wink wink time travelers

    if(timeDiff >= DAY_IN_MS) return "over a day ago";
    if(timeDiff < MIN_IN_MS) return `${Math.round(timeDiff/SEC_IN_MS) || 1} sec ago`;
    if(timeDiff < HOUR_IN_MS) return `${Math.round(timeDiff/MIN_IN_MS)} min ago`;
    return `${Math.round(timeDiff/HOUR_IN_MS)} h ago`;
};