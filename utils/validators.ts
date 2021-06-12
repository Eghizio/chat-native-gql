// also could use some lib for that
export const isEmail = (email: string) => {
    if(email.length === 0) return true;
    const result = !!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    return result;
};

export const passwordsMatch = (pwd: string, pwdConfirm: string) => pwd === pwdConfirm;