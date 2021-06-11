export const isEmail = (email: string) => {
    if(email.length === 0) return true;
    const result = !!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    console.log(result);
    return result;
};

export const passwordsMatch = (pwd: string, pwdConfirm: string) => pwd === pwdConfirm;