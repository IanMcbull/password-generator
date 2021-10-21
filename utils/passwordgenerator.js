const passGen = (length = 8, symb = true, numbers = true) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*+=-_?/';
    const nums = '0123456789';
    let chars = alpha;

    symb ? (chars += symbols) : '';
    numbers ? (chars += nums) : '';
    return filterPassword(chars, length);

}

const filterPassword = (char, length) => {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += char.charAt(Math.floor(Math.random() * char.length))
    }
    return password;
}
module.exports = passGen;